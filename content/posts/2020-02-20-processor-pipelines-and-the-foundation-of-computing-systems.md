---
title: Processor Pipelines and the Foundation of Computing Systems
author: Jared Sulzdorf
type: post
date: 2020-02-20T18:01:19+00:00
url: /2020/02/20/processor-pipelines-and-the-foundation-of-computing-systems/
categories:
  - Georgia Tech OMSCS
  - High Performance Computer Architecture

---
This will probably be my last semester at [Georgia Tech][1] that includes a computing systems course (unless high performance computing becomes available again online). The rest of my coursework will be focused on my specialization &#8211; machine learning &#8211; and while I&#8217;m excited to focus more on the questions that brought me to this program, I will undoubtedly miss computing systems.

The beautiful part of this area of computer science is that it is where the rubber meets the road. Theory meets application and provides lessons to feed back into theory which then feeds into other applications.

<!--more-->

Take communication on a [bus][2]. Busses are busy and shared by various components, all of which are vying for time on them so they can send signals out on the wire to other components. Only one component at a time gets to use a particular bus, but they do so without any shared knowledge or communication. To deal with this, we&#8217;ve developed a series of approaches to sensing if the bus is in use and adapting to how often we try to check based on how busy the bus is all in an effort to avoid contention between components.

This approach manifests itself in the concept of [exponential backoff][3] wherein a component will sense traffic on the wire and if it exists, wait some time and sense again. On each iteration, if the wire is still busy, we increase the time we wait to try by some exponential factor. Once the wire is free, that component now owns the wire until all of its bits are transferred.

While this algorithm was borne from managing communication between components on a chip, it was [refined][4] and [enhanced][5] in computer networks which are tasked with managing communication between billions of devices on shared channels. Distributed applications took it further and brought the same lessons learned in hardware into software. This cycle is gorgeous to watch.

[Instruction pipelining][6] is another similar paradigm. While the idea is prevalent in computer networks and multithreaded applications, its roots are traced back to the chip.

The notion of pipelining is relatively simple. We&#8217;re given a task that has to be carried out in stages and we have multiple workers that can carry out the task. We could design each worker to do the task start-to-finish, but there are drawbacks to this approach that are magnified on the processor. Instead, we design the work in such a way that each worker is responsible for a portion of the task. As their portion is done, they pass the task off to another worker and look to see if any other tasks are ready for them.

In this way, we can keep each worker busy on a task, specialize them to that task so they&#8217;re efficient, and increase the throughput of the system. If we have a 5 stage pipeline and each stage takes 1 second to complete, then the first task will take 5 seconds to complete. However, if the tasks are coming in hot and heavy, one after another, and each worker is fully utilized, then each second after that we&#8217;ll have another completed task.

Processor pipelining is exactly akin to this. Each instruction passed to the processor moves through various stages in a pipeline. To keep it simple, we&#8217;ll continue to imagine a 5-stage pipeline with the following stages:

  * Fetch
  * Decode
  * Execute
  * Memory
  * Write Back

On each pulse of the processor clock (my i7 has a 2.5 GHz clock, which amounts to 2,500,000,000 pulses every second), an instruction is passed from one stage to the next.

A simple instruction is something like:

<pre>MUL R2, R3, 4</pre>

which can be read as &#8220;multiply the contents of register 3 by 4 and place the result in register 2.&#8221;

In our 5-stage pipeline, this instruction would be compiled and placed into the instruction queue. As the program was executed, the processor would go to work by _fetching_ the instruction from the queue. On the next clock cycle, the instruction would be _decoded_ for its operation code (MUL), operands (R3 and 4), and destination (R2) and then placed in a reservation station. As the clock pulses again, if all the operands for the instruction were ready, then we dispatch the instruction to the multiply/divide ALU for _execution_. In some cases, we may need to send the result to _memory_ (or grab something from memory to finish the operation), so on the next cycle, we do just that. In this case, there&#8217;s nothing to do here, so we simply let the time pass. In the last cycle (for this instruction), we take the result of our operation and _write it back_ to R2, letting any other instruction that&#8217;s waiting know the result as well.

As each stage completes its work, it grabs another instruction that&#8217;s ready for the next stage. Given three instructions and a few clock cycles, you should have a pipeline that looks something like this (where I1, I2, and I3 represent the instruction):

<table style="border-collapse: collapse; width: 100%;" border="1">
  <tr>
    <td style="width: 16.6667%;">
      (Cycle Count)
    </td>
    
    <td style="width: 16.6667%;">
      <strong>Fetch</strong>
    </td>
    
    <td style="width: 16.6667%;">
      <strong>Decode</strong>
    </td>
    
    <td style="width: 16.6667%;">
      <strong>Execute</strong>
    </td>
    
    <td style="width: 16.6667%;">
      <strong>Memory</strong>
    </td>
    
    <td style="width: 16.6667%;">
      <strong>Write Back</strong>
    </td>
  </tr>
  
  <tr>
    <td style="width: 16.6667%;">
      1
    </td>
    
    <td style="width: 16.6667%;">
      I1
    </td>
    
    <td style="width: 16.6667%;">
    </td>
    
    <td style="width: 16.6667%;">
    </td>
    
    <td style="width: 16.6667%;">
    </td>
    
    <td style="width: 16.6667%;">
    </td>
  </tr>
  
  <tr>
    <td style="width: 16.6667%;">
      2
    </td>
    
    <td style="width: 16.6667%;">
      I2
    </td>
    
    <td style="width: 16.6667%;">
      I1
    </td>
    
    <td style="width: 16.6667%;">
    </td>
    
    <td style="width: 16.6667%;">
    </td>
    
    <td style="width: 16.6667%;">
    </td>
  </tr>
  
  <tr>
    <td style="width: 16.6667%;">
      3
    </td>
    
    <td style="width: 16.6667%;">
      I3
    </td>
    
    <td style="width: 16.6667%;">
      I2
    </td>
    
    <td style="width: 16.6667%;">
      I1
    </td>
    
    <td style="width: 16.6667%;">
    </td>
    
    <td style="width: 16.6667%;">
    </td>
  </tr>
  
  <tr>
    <td style="width: 16.6667%;">
      4
    </td>
    
    <td style="width: 16.6667%;">
    </td>
    
    <td style="width: 16.6667%;">
      I3
    </td>
    
    <td style="width: 16.6667%;">
      I2
    </td>
    
    <td style="width: 16.6667%;">
      I1
    </td>
    
    <td style="width: 16.6667%;">
    </td>
  </tr>
  
  <tr>
    <td style="width: 16.6667%;">
      5
    </td>
    
    <td style="width: 16.6667%;">
    </td>
    
    <td style="width: 16.6667%;">
    </td>
    
    <td style="width: 16.6667%;">
      I3
    </td>
    
    <td style="width: 16.6667%;">
      I2
    </td>
    
    <td style="width: 16.6667%;">
      I1
    </td>
  </tr>
</table>

In cycle 6, I1 will exit the pipeline, and each subsequent clock cycle will see another instruction be done. In general, in an N-stage pipeline and X instructions the number of clock cycles that it takes to complete the program will be N + (X &#8211; 1). Without pipelining, it takes N * X clock cycles for the program to complete. Like golf, lower numbers are better when dealing with speed.

Many [multi-threaded applications][7] use this model when dealing with large jobs. A thread will be designed to do a certain task and hand the job off to another thread which will then work on the next stage. There are drawbacks to this approach (synchronization and architecture/design) but also some great benefits ([exploiting a warmed cache][8] for a thread that only accesses some portion of memory).

Similarly, in network communication we see pipelining in play. When setting up a connection between two hosts, TCP enters a handshake phase to ensure that both computers can talk to each other. It does this by passing small, discrete packets of information and receiving acknowledgements that those packets arrived at the intended location. Once the connection is &#8220;trusted&#8221;, the connection is pipelined, with the client making multiple HTTP requests over the connection and the server responding with multiple packets. Instead of an exchange where the client requests a single packet and the server responds with a single packet (with each alternating until all the data has been sent), the client can send many requests at once and get many packets back, with the number of requests in the pipeline increasing up to some pre-defined limit. This is the foundation of [HTTP pipelining,][9] and while the multiplexing capabilities of HTTP/2 have since proven more capable, this is still a valuable tool within those connections.

It is this interplay of practice and theory that is unique in computer science and especially noticeable in computing systems. It&#8217;s a loop that I&#8217;ll miss watching and learning from, but one that I&#8217;m already noticing in artificial intelligence as well.

 [1]: http://www.omscs.gatech.edu/
 [2]: https://en.wikipedia.org/wiki/Bus_(computing)
 [3]: https://en.wikipedia.org/wiki/Exponential_backoff
 [4]: https://en.wikipedia.org/wiki/Carrier-sense_multiple_access
 [5]: https://en.wikipedia.org/wiki/Carrier-sense_multiple_access_with_collision_detection
 [6]: https://en.wikipedia.org/wiki/Instruction_pipelining
 [7]: https://en.wikipedia.org/wiki/Thread_(computing)
 [8]: https://en.wikipedia.org/wiki/Cache_coherence
 [9]: https://en.wikipedia.org/wiki/HTTP_pipelining