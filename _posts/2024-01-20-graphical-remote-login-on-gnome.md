---
title: "Graphical Remote Login on GNOME"
date: 2024-01-20
youtube: "https://www.youtube.com/embed/21rvNJig0a0?si=aleaRaKZndWMs2ML"
tags:
  - GNOME
  - RDP
  - Linux
---

<!-- <div class="content_title"> Description </div> -->
It's been a long time since my last post. Since I joined SUSE, I've been quite busy and learning a lot of stuff. But here I am again, and I will share the work I've been doing at <span style="text-decoration: underline;"><a href="https://www.gnome.org/" rel="noopener">GNOME</a></span> to make it support graphical remote login in Wayland.

When I started working on this, there were already some parts working: GNOME sessions could be run without a display (headless), and an RDP/VNC server already existed for GNOME called <span style="text-decoration: underline;"><a href="https://gitlab.gnome.org/GNOME/gnome-remote-desktop" rel="noopener">gnome-remote-desktop</a></span>.

After some research and discussions, the design to make it happen was as follows: one RDP server running as a system service; on a new connection, this RDP server requests the GNOME Display Manager (GDM) to create a headless login session. This RDP server then connects to it and displays this login session. After successful authentication, GDM creates a new user session (headless) with a new RDP server attached to it. Finally, the system RDP server will send the RDP client to the new RDP server using the Server Redirection feature of the RDP protocol. This solution uses the RDP protocol because it offers a Server Redirection functionality, unlike VNC.

While this overview might look straightforward, it has many puzzle pieces which need a lot of organization and work to fit them together finally.

One important thing was implementing a D-Bus protocol that orchestrates the communication between the system RDP server, GDM, and the user RDP server. This was great because I learned a lot about how D-Bus works, which is used by many programs in Linux.

The gnome-remote-desktop relies on the <span style="text-decoration: underline;"><a href="https://github.com/FreeRDP/FreeRDP" rel="noopener">FreeRDP</a></span> library to have an RDP server. This library is one of the most used for RDP solutions. But it still was missing some parts of the RDP protocol for Server Redirection. So I had to research again to understand how it works and after that contributed to FreeRDP to have it working. Also, in order to make it work with mstsc, which is the native RDP client for Windows, it was necessary to support RDSTLS (a security method of the RDP protocol) which wasn't implemented either. So, again I contributed by adding the implementation of RDSTLS.

After almost a year since I created a merge request to the gnome-remote-desktop repo with this, it got an important review by Ray, who is the maintainer of GDM. That review suggested interesting modifications to the design. Instead of having two different ways to display a session: 1) the system RDP server connecting to the login session and 2) the user RDP server receiving the RDP client using the Server Redirection process; it could be improved to only use one method to display both sessions, that way the design is symmetric and there's only one source for bugs and not bugs from both. I agreed with that modification and, after some work, using the Server Redirection process allows displaying a login session and a user session.

At the beginning of 2024, the main MR was finally merged, and it looks like this feature will be usable in the next GNOME 46. I have to mention and thank Jonas, Pascal and Ray; with their help and work, this is finally done.

If you want to take a look at the code: <span style="text-decoration: underline;"><a href="https://gitlab.gnome.org/GNOME/gnome-remote-desktop/-/merge_requests/139" rel="noopener">here</a></span> is the main MR.
