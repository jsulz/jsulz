---
title: Checklists Are Important for Everything – Especially Processors
author: jared
type: post
date: 2020-02-19T03:45:38+00:00
url: /2020/02/18/checklists-are-important-for-everything-especially-processors/
categories:
  - Georgia Tech OMSCS
  - High Performance Computer Architecture

---
Every so often, a few posts come across my desk at the same time, and it reminds me of how at some basic level, all work is the same work, just manifested in different ways. [Checklists][1] and [agendas][2], which are near and dear to my heart, are crucial for communicating and getting things done correctly across a team. They represent an agreement, a contract, reflections of expectations.

When you enter a meeting that has gone off the rails, it&#8217;s likely that either someone has torpedoed the agenda or one was never established. Likewise, any time I&#8217;ve needed to get a project back in a manageable state, a forced prioritized to-do list is my weapon of choice.

Similarly, sequential logical steps are the bread and butter of processors. Most of my high performance computing architecture course is focused on how processors squeeze every possible optimization out of a program&#8217;s instructions. There are dozens of ways that it does this (branch prediction, loop unfurling, data caches, etc), but perhaps most approachable is how a processor issues and executes instructions.

<!--more-->

The most popular algorithm that is used by any high-end processor (i.e., anything that&#8217;s more complicated than the processor in a refrigerator) is a variation of [Tomasulo&#8217;s algorithm][3]. The primary goal of this algorithm is to allow the processor to issue instructions to the arithmetic logic unit(s) for whatever computation must be done (addition, subtraction, multiplication, division, storing data, or retrieving data) in a way that maintains forward progress at all times.

As usual, a concrete example is helpful. Let&#8217;s say we have the following instructions:

<pre>ADD R1, R2, R3
ADD R2, R1, R4
SUB R5, R6, R7
</pre>

This translates to:

  * Add the values in register 2 and register 3 and put it in register 1
  * Add the values in register 1 and register 4 and putt it in register 2
  * Subtract the value in register 6 from register 7 and put in in register 5

It might not be readily apparent, but instruction two has a true dependency on instruction one. It needs the value in R1, which is produced by the previous instruction. It cannot move forward without that information. However, the third instruction has no such dependency. It could feasibly execute before the second instruction without causing any issues in the program&#8217;s execution. If the processor is capable of executing two instructions per clock cycle, then instruction one and two could execute immediately, while the second instruction can run after R1 has been produced.

This little optimization allows us to execute non-dependent instructions out of program order, speeding up the program significantly. In the case above, if we had to wait for such RAW (read after write) dependencies to play out, it would&#8217;ve taken three instructions (50% slower). Imagine if everything on your computer ran 50% &#8211; or more &#8211; slower.

At the heart of Tomasulo&#8217;s algorithm are a few data structures managed by the hardware:

  * [Instruction Queue][4] 
      * As the name suggests, this holds the instructions to be executed. These are fed into the processor in the order in which the compiler translates them.
  * [Reservation Station (RS)][5] 
      * These are holding areas where instructions are placed so that operands can be gathered from registers. In the case that those operands are not yet ready, the instruction is held and waits until everything is ready.
  * Register Alias Table (RAT) 
      * This is the magic sauce of indirection that we use to issue instructions out of order. In Tomasulo&#8217;s algorithm, this table allows a decoupling of the registers that a programmer utilizes (logical registers) from the physical registers that are used (AKA, [&#8220;register renaming&#8221;][6]). In this algorithm, the physical registers are the reservation stations and this table keeps track of which logical register the reservation station will deposit its results to. Each entry is either empty (in which case the register has the &#8220;true&#8221; value to use) or has a reservation station name (which means that the operand we need is not yet computed).

With midterms less than a week away, many of my brain cells are devoted to moving an instruction through these holding areas, into the ALU, and back into the registers, all while keeping track of clock cycles and various architectural limitations. To help with this, I&#8217;ve developed a CHECKLIST!!

It goes something like this:

  * Issuing 
      * Check to ensure the next instruction has an available RS (there are a finite number of these suckers around)
      * If there is: 
          * Put the instruction code (ADD, SUB, MUL, DIV, etc) into the RS
          * Note the registers the instruction uses as operands, and for each register: 
              * Look at the RAT to see if the operand is available (if it is, the RAT entry for that register will be empty) 
                  * If it is, put the value in the RS station entry
                  * If it is not, then put the RS number that we are waiting on for this register in the RS entry
          * Note which register will be used to hold the result of this operation and update the RAT entry for that register to point to this RS
  * Dispatching 
      * Check all RS entries to see if any have all of their needed operands
      * If any does, then note the cycle and mark the RS entry as &#8220;dispatched&#8221; 
          * This effectively sends the operands to the ALU for computing; we&#8217;ll wait for however many cycles that particular operation takes
          * Along with the operands, the RS number is sent as a tag and will come back with the result
  * Broadcasting 
      * When the instruction is done (which will be some number of cycles from when it was dispatched), the result and the RS number is broadcast to all RS entries and the RAT
      * For the RS entries, if any RS entry was waiting on the result from this RS, then update the RS to have the result
      * For the RAT, 
          * f the RAT entry has the same RS number, then erase it from the RAT and update the register to now hold the produced value
          * And erase the RAT entry
      * Then make sure to note the ALU is open for business and clear the RS entry for the instruction so that it can hold new instructions

Checklists &#8211; ain&#8217;t they grand?

 [1]: https://nesslabs.com/checklists
 [2]: https://www.biddlebrain.com/2020/02/launchpad-a-successful-client-call/
 [3]: https://en.wikipedia.org/wiki/Tomasulo_algorithm
 [4]: https://en.wikipedia.org/wiki/Prefetch_input_queue#Instruction_queue
 [5]: https://en.wikipedia.org/wiki/Reservation_station
 [6]: https://en.wikipedia.org/wiki/Register_renaming