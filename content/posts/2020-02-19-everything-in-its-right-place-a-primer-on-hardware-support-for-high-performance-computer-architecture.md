---
title: Everything In Its Right Place – A Primer on Hardware Support for High Performance Computer Architecture
author: Jared Sulzdorf
type: post
date: 2020-02-19T18:09:44+00:00
url: /2020/02/19/everything-in-its-right-place-a-primer-on-hardware-support-for-high-performance-computer-architecture/
categories:
  - Georgia Tech OMSCS
  - High Performance Computer Architecture

---
My wife and I have a running joke in the house when either one of us moves something to its &#8220;correct&#8221; resting place, usually punctuated by breaking out into song.



Computer science is the practical application of many other sciences (solid state physics, calculus, linear algebra, information science, etc., etc., etc.), but it is at its most exacting and least forgiving the closer to the hardware you get. Here, everything truly does have its right place.

<!--more-->

To facilitate moving bits around on a processor at speeds that are nearly impossible to appreciate, most modern processors use a combination of predictive and out-of-order execution techniques. Practically, this means that the CPU is guessing and working ahead in the hopes that its work will not be in vain. To do this, and to recover when it&#8217;s guessed incorrectly, necessitates a variety of small, hardware-supported, data caches (places to store things) and lookup tables (places that point to where things actually are). My last post looked at how some of these things are used inside an algorithm to facilitate out-of-order execution, but without an appreciation of the hardware, it&#8217;s difficult to track how the data moves around on the chip.

Nearly all modern computers are based on a model developed in the 1940&#8217;s by John von Neumann (aptly named [von Neumann architecture][1]). In this model, we see a zoomed out blueprint for computers:

  * An input device that feeds information into the computer (keyboards, mice, external storage) and an output device that feeds information out (screens, speakers, printers)
  * A central processing unit (CPU) that is comprised of an arithmetic/logic unit and its registers (things that add/subtract/multiply/divide or simply compare numbers) and a control unit (something to keep track of where we are in the program, where we&#8217;re going next, and what we&#8217;re working on)
  * A memory unit that holds information that the CPU grabs when it needs to know what to do/manipulate and uses to store when it&#8217;s done working

This model is one that has served computer scientists well for decades and is the foundation on which we&#8217;ve built some pretty fantastic machines. As the needs of computers have advanced, so has this model. Today&#8217;s CPUs are comprised of far more than just an ALU, some registers, and a control unit. Most CPUs are built on the scale of nanometers (1 billionth of a meter), allowing us to cram a variety of tools that store data to speed up the processing of programs.

Halfway through my course on high performance computer architecture, we&#8217;ve been introduced to a few handfuls of these:

  * [Branch target buffer][2] (BTB)
  * [Branch history table][3] (BHT)
  * [Return address stack][4] (RAS)
  * [Register alias table][5] (RAT)
  * [Reservation stations][6] (RS)
  * [Instruction Queue][7] (IQ)
  * [Load store queue][8] (LSQ)
  * [Reorder buffer][9] (ROB)

and just like the kitchen thermometer in our condo, every piece of data the CPU produces has its right place inside one of these structures.

[Branch prediction][10], where the CPU guesses the path of execution through conditional statements such as if/if-elses, while loops, and for loops, requires that we keep track of the branch location, destination, and its history (what direction has it gone previously). The **BTB** and **BHT** work in concert to make this happen, and improve the efficiency of these predictions. The **BHT** keeps track of the patterns in a branch; in an if/else, this pattern is limited, but imagine a for loop with another for loop nested inside, now we have four places for the CPU to guess where to go! The BHT uses the branch address as an index into the table where we&#8217;ve stored a pattern for this address (say taken, then not taken). This history is used as an index into the **BTB**. Here we store the predicted program address for such patterns. If we see a taken then a not taken, the **BTB** provides the address where we think we should go next. In this way, we can guess the direction of branches in advance without computing the values in the conditional(s). Very helpful in a [pipelined processor][11] where we may not know the direction of a branch until the 30th stage of the pipeline.

The **RAS** is a special kind of branch predictor for function calls. Functions are ideally called from many places in a program. As such, the return address of a function will vary based on where it is called. The **RAS** is a small hardware stack where, on the call of a function, the address where we called is pushed onto the stack and when we encounter a RET (return statement), the address is popped off. This way, if we have nested function calls, we can push more addresses onto the stack and as those function calls unwind, each address is popped off so the program counter knows where to go next.

The other hardware data structures are in place primarily to help out of order execution. As I mentioned in my last post, out of order execution gives us a way to move ahead in processing instructions without needing to do so in sequential order. Given that not all instruction times are created equally (loading and storing information takes longer than doing an addition), it&#8217;s important to be able to move along while some lengthier instruction is dispatched to do some work.

The **IQ** is a simple stack provided by the compiler and stored in main memory. As a program executes, the [program counter][12] keeps track of the address of the next instruction to grab from this stack. These are provided to the processor in-order so that we may see the dependencies in the program and avoid them using our other data structures.

After the instruction is fetched from the **IQ**, it is decoded. This process requires that we look at the operands which are represented as registers. As the CPU decodes the instruction, it uses the **RAT** to see the values of the operands. It might be that the value is still being computed. Perhaps we&#8217;re waiting on a value to be loaded into that register. In this case, the **RAT** will not point to the register itself, but instead a &#8220;tag.&#8221; This tag will be broadcasted to a few locations when the operand is computed and we&#8217;ll be waiting to grab it, but until then, we simply store that tag. If the **RAT** points to the register, then we just grab the value from the register and continue on our merry way.

Once we&#8217;ve decoded the instruction, we place it in an **RS** entry. If we have all of the operands we need, then we&#8217;ll quickly dispatch the operands and the operation code (ADD, SUB, MUL, etc.) to the proper ALU. If we&#8217;re waiting on an operation&#8217;s value, then we store the information in the **RS** and continue processing other instructions. As the operation completes, it broadcasts the value along with its tag and the **RS** entry is evaluated to see if it was waiting for that tag. If so, we grab it and dispatch the instruction to the ALU and open the **RS** entry so that other instructions may be placed here.

While the **RAT** and **RS** provide a way to execute instructions out of order, the **ROB** provides a path to bring order to chaos. It contains a register value (where the value will be placed), the value itself, and an entry to note if the entry can be committed to its destination register. The **RAT** contains the tag for each **ROB** entry and it is this tag that the **RS** entries wait on. When an operation is complete, the tag is broadcasted to the **ROB** as well, the entry is looked up, and the result is placed in the entry. If there are other entries that have yet to be committed to registers, then the **ROB** entry will wait. Otherwise, the **ROB** entry can simply be deposited in a register and removed from the table.

Last, but not least, the **LSQ**. Loads and stores are a special operation. They are time consuming, happen throughout a program&#8217;s execution, and similar to depositing values in registers, must be done in order. So that we don&#8217;t clutter up the **ROB** with these commands, we have a separate place to put them which allows us to perform a few additional tricks. When a store is issued, the address and value are placed in the **LSQ**, as it completes, it is removed from the queue. If a load enters the **LSQ** for the same address, instead of going off chip (or to a nearby cache) for the value, it simply grabs the value from the previous store. Pretty nifty!

Each one of these data structures is implemented in hardware, and while they all deserve more detail than what I&#8217;ve provided, hopefully they provide a window into the immense complexity of the CPU. It&#8217;s rare that I talk out loud (or chat on Slack) about these things, because I&#8217;ve found that most people just are not interested. When I do, it&#8217;s a shocking reminder of the lengths that hardware and software engineers have worked in concert to squeeze tiny gains in performance that are amplified by the sheer volume of work a processor is expected to do. Like a supply chain with thousands of moving parts and countless repetitive tasks, a few percentage points in the right or wrong direction can make all the difference.

 [1]: https://en.wikipedia.org/wiki/Von_Neumann_architecture
 [2]: https://en.wikipedia.org/wiki/Branch_target_predictor
 [3]: https://en.wikipedia.org/wiki/Branch_predictor#Two-level_predictor
 [4]: https://en.wikipedia.org/wiki/Call_stack#Unwinding
 [5]: https://en.wikipedia.org/wiki/Register_renaming
 [6]: https://en.wikipedia.org/wiki/Reservation_station
 [7]: https://en.wikipedia.org/wiki/Prefetch_input_queue#Instruction_queue
 [8]: https://en.wikipedia.org/wiki/Memory_disambiguation#Memory_disambiguation_mechanisms
 [9]: https://en.wikipedia.org/wiki/Re-order_buffer
 [10]: https://en.wikipedia.org/wiki/Branch_predictor
 [11]: https://en.wikipedia.org/wiki/Instruction_pipelining
 [12]: https://en.wikipedia.org/wiki/Program_counter