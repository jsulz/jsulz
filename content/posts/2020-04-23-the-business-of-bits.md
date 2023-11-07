---
title: The Business of Bits
author: Jared Sulzdorf
type: post
date: 2020-04-23T17:01:08+00:00
url: /2020/04/23/the-business-of-bits/
categories:
  - Georgia Tech OMSCS
  - High Performance Computer Architecture

---
If your vocation is one that manages computers, you&#8217;re in the business of bits. That is to say, you&#8217;re somehow responsible for the writing and/or reading of binary digits. Ones and zeros. Bits.

A bit is a fundamental unit for computers. One bit represents a binary logical state as it can be one of two values (again, 0 or 1). Alone, a bit doesn&#8217;t tell us much (the value of [its information has been measured][1]) but if you string them together magic happens. If you work with computers at a higher level, like writing a web-app in JavaScript or PHP, it&#8217;s easy to forget this although you&#8217;ll certainly encounter them from time to time. If you work with computers at an even higher level, like say just opening Excel from time to time, then you&#8217;re apt to think most of this is gibberish. However, at the lowest levels of software, it&#8217;s impossible to escape bits.

<!--more-->

Hardware loves bits. It especially loves when we can logically split a series of bits apart and use the resulting digits as a way to find other bits. Once you realize that a computer &#8220;simply&#8221; creates, stores, references, adds, and multiplies bits you start to wonder at the logic of building incredibly complex systems on the back of something like this. It&#8217;s true that computer systems in their totality are complex, but that they are [built on simple systems][2] is in many ways a relief.

Everything that happens in a computer comes down to bits. When a program is compiled and run, the processor is fed memory locations (addresses) which are bits. These locations contain more memory locations or variables, all of which are bits. The instructions to manage these bits are in turn more bits. But what does this practically look like and how does hardware fit into it all?

Let&#8217;s take a simple memory access. A program&#8217;s memory is abstracted from physical memory through a concept known as &#8220;virtual memory.&#8221; Your operating system sees main memory (RAM) as a contiguous block of addresses starting at 0 and running to some maximum (if you have 4GB of RAM that would be `0x100000000` in hexadecimal, `100000000000000000000000000000000` in binary, or 4294967296 in decimal). It needs to see this view as the arbiter of resources, but an application is not the same sort of privileged actor. If a program had a similar view of memory (with its addresses starting at some minimum and running to a maximum) two key problems would arise:

  * The overhead in asking the operating system to give the program a contiguous block (or many small fragmented blocks) of RAM would tax the system into uselessness
  * A single program would occupy the entire RAM (and more), doing away with the multi-program paradigm

Virtual memory is a useful abstraction that allows a program to have a view of a contiguous block of memory (much easier to manage for both the program and operating system) that is essentially infinite (no longer bound to the physical limitations of the RAM) and separate from physical memory (allowing multiple programs to see the same virtual memory address but that address is mapped to a different physical address). This separation of a program&#8217;s view of memory from the operating system&#8217;s view requires a mapping so that when a program requests an address, the operating system can intervene and respond with a physical address (we&#8217;ll act like no caches exist for the moment). This mapping is the purview of a page table.

A page table is simply an index. When provided with an address, the operating system divides the bits into two sections, one is the virtual page number and the other is the page offset. The virtual page number is our index into the page table. If our physical memory divides chunks into 4KB pages, we have a 32-bit virtual memory space, and the address we&#8217;re interested in is `0x0001F001`, then we start breaking up the address.

Each number in the address is four bits; we represent 1 as `0001` (2 would be `0010`, 3 would be `0011`, 4 is `0100`, etc). With a page of 4KB (that&#8217;s 2^12 bits) we use the last 3  hexadecimal numbers (or the last 12 bits) as the page offset (that would be `0x001` or `0000 0000 0001` in binary) and the remaining digits as the index (that would be `0x0001F` or `0000 0000 0000 0001 1111` in binary). Since our index in this case is `0x0001F`, which is 31 in decimal, we index into the 31st spot in the page table. Whatever value is there, let&#8217;s say it&#8217;s `0x00F0F` we use to find the page frame number in physical memory and combine it with the page offset from the virtual address to find the byte we&#8217;re looking for. Illustrated, it would look something like this:

![Bits](/img/bits.png "Bits")

Understanding all this is complicated. It requires a knowledge of binary, hexadecimal, programming, compilation, how a CPU works, virtual memory, physical memory, and so much more. It&#8217;s unfair to call this &#8220;simple,&#8221; and I wouldn&#8217;t dare. What&#8217;s important to recognize, however, is that at the core of this all, we are designing a system to spit out bits (our friendly 1&#8217;s and 0&#8217;s), slice them using our system specifications, and reconstitute them in a way that adheres to those specifications. We use 12 bits as the offset because we designed the system to have 4KB pages. The remaining 20 bits are the index because we designed the system to use 32-bit addresses. Things may seem arbitrary, but every bit has its right place.

In hardware, we find bits all over the place. As software and system designers, it&#8217;s our job to manipulate these wonderful little things. In a cache we have offset bits, index bits, tag bits, valid bits, dirty bits, shared bits, bits that represent counters for what to replace, and bits that represent the state of a block. You get a bit! And you get a bit!

These wonderful little pieces of information make up the core of computing. It might be that one day a bit will be replaced by a [qubit][3] or some new [ternary system][4], but until that day if you work on a computer, you&#8217;re in the business of bits.

 [1]: https://en.wikipedia.org/wiki/Shannon_(unit)
 [2]: https://www.gkogan.co/blog/simple-systems/
 [3]: https://en.wikipedia.org/wiki/Qubit
 [4]: https://en.wikipedia.org/wiki/Ternary_computer