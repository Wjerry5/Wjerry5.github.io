import{g as se,k as te,t as oe,r as a,p as o,m as i,n as e}from"../chunks/disclose-version.BMdvu1l2.js";import{p as le,o as de}from"../chunks/runtime.n8FX2Xm8.js";import{i as ce}from"../chunks/lifecycle.BwlZF85e.js";import{o as he}from"../chunks/index-client.B5A-A34l.js";function l(r,s,n){n=n==null?null:n+"";var t=r.__attributes??(r.__attributes={});if(se){t[s]=r.getAttribute(s);return}t[s]!==(t[s]=n)&&(n===null?r.removeAttribute(s):r.setAttribute(s,n))}const ue=""+new URL("../assets/tarek.CzE2p_cf.jpg",import.meta.url).href,pe=""+new URL("../assets/charith.Czu-ZXfr.jpg",import.meta.url).href,me=""+new URL("../assets/dachun.CjheKMsR.jpg",import.meta.url).href,ge=""+new URL("../assets/wanyu.DQrIEpnz.jpg",import.meta.url).href,ve=""+new URL("../assets/ruijie.CsNsyfY4.jpg",import.meta.url).href;var fe=oe(`<div><div class="toast toast-top toast-end"><div class="card text-base-content shadow-base-content shadow-sm p-2"><label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="dark"> <svg class="swap-off h-10 w-10 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 28 28"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg> <svg class="swap-on h-10 w-10 fill-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg></label></div></div> <div class="container mx-auto p-10 pt-16"><article class="prose lg:prose-xl prose-stone max-w-none"><h1>CIKM'24 Tutorial: Towards Efficient Temporal Graph Learning: Algorithms, Frameworks, and
				Tools</h1> <p class="text-center leading-7">Ruijie Wang, Wanyu Zhao, Dachun Sun, Charith Mendis, and Tarek Abdelzaher<br>University of
				Illinois Urbana-Champaign<br>Oct, 2024</p> <h2>Abstract</h2> <p class="leading-8">Temporal graphs capture dynamic node relations via temporal edges, finding extensive utility
				in wide domains where time-varying patterns are crucial. Temporal Graph Neural Networks
				(TGNNs) have gained significant attention for their effectiveness in representing temporal
				graphs. However, TGNNs still face significant efficiency challenges in real-world
				low-resource settings. First, from a data-efficiency standpoint, training TGNNs requires
				sufficient temporal edges and data labels, which is problematic in practical scenarios with
				limited data collection and annotation. Second, from a resource-efficiency perspective, TGNN
				training and inference are computationally demanding due to complex encoding operations,
				especially on large-scale temporal graphs. Minimizing resource consumption while preserving
				effectiveness is essential. Inspired by these efficiency challenges, this tutorial
				systematically introduces state-of-the-art <em>data-efficient</em> and <em>resource-efficient</em> TGNNs, focusing on algorithms, frameworks, and tools, and discusses
				promising yet under-explored research directions in efficient temporal graph learning. This tutorial
				aims to benefit researchers and practitioners in data mining, machine learning, and artificial
				intelligence.</p> <h2>Outline</h2> <ul class="leading-5"><li>Part I: Introduction [<a href="#part-i">Slides (coming soon)</a>] <ul><li>Background and Motivations</li> <li>Problem Definitions and Settings</li></ul></li> <li>Part II: Data-Efficient Temporal Graph Learning [<a href="#part-ii">Slides (coming soon)</a>] <ul><li>Key Challenges of Data-Efficient TGNNs</li> <li>Self-Supervised Temporal Graph Learning</li> <li>Weakly-Supervised Temporal Graph Learning</li> <li>Few-Shot Temporal Graph Learning</li></ul></li> <li>Part III: Resource-Efficient TGNNs [<a href="#part-iii">Slides (coming soon)</a>] <ul><li>Key Challenges of Resource-Efficient TGNNs</li> <li>Efficient Discrete-Time TGNN Frameworks</li> <li>Efficient Continuous-Time TGNN Frameworks</li> <li>Efficient Distributed TGNN Training Frameworks</li></ul></li> <li>Part IV: Open Questions and Challenges [<a href="#part-iv">Slides (coming soon)</a>] <ul><li>Generative Pre-training on Temporal Graphs</li> <li>Distributed Training on Temporal Graphs</li></ul></li></ul> <h3>Presenters</h3> <div class="flex gap-10"><div class="flex-initial"><img alt="Ruijie Wang" class="rounded-lg not-prose w-48 m-0"></div> <div class="flex-1 prose-base"><strong>Ruijie Wang</strong> is a Postdoctoral Research Associate at the Department of Computer
					Science, the University of Illinois at Urbana Champaign. He received his Ph.D. in Computer
					Science from the University of Illinois at Urbana-Champaign. His research interests lie in
					deep graph learning algorithms for real-world graphs at scale to understand the underlying
					dynamic patterns and predict future knowledge. He is also generally interested in machine learning
					and deep learning on graphs, natural language, and time-series data, with applications on social
					network analysis, knowledge graph, and dynamic systems. He has published more than 30 papers
					in refereed international conferences and journals including NeurIPS, WWW, ACL, SIGIR, AAAI,
					CIKM, SenSys, etc.</div></div> <div class="divider"></div> <div class="flex gap-10"><div class="flex-initial"><img alt="Wanyu Zhao" class="rounded-lg not-prose w-48 m-0"></div> <div class="flex-1 prose-base"><strong>Wanyu Zhao</strong> is a first-year Ph.D. student in Computer Science at the University
					of Illinois Urbana-Champaign (UIUC). Her current research focuses on developing efficient and
					scalable systems for temporal graph learning. With an interest in the intersection of systems
					and machine learning, she aims to explore novel techniques in constructing efficient AI systems
					through algorithmic insights and comprehensive systems understanding. She is also interested
					in the application of machine learning to enhance system performance.</div></div> <div class="divider"></div> <div class="flex gap-10"><div class="flex-initial"><img alt="Dachun Sun" class="rounded-lg not-prose w-48 m-0"></div> <div class="flex-1 prose-base"><strong>Dachun Sun</strong> is a senior Ph.D. student in Computer Science at the University
					of Illinois at Urbana-Champaign (UIUC). His research focuses on computational social analysis
					with deep graph learning and large language models. Main topics include social network data
					mining and multimodal embedding for social data. Additionally, his academic interests extend
					to natural language processing, knowledge graphs, and diffusion-based methods on graphs. He
					has a dozen of published papers at renowned international conferences and journals including
					TPAMI, NeurIPS, WWW, AAAI, SIGIR, and more.</div></div> <div class="divider"></div> <div class="flex gap-10"><div class="flex-initial"><img alt="Charith Mendis" class="rounded-lg not-prose w-48 m-0"></div> <div class="flex-1 prose-base"><strong>Charith Mendis</strong> is an Assistant Professor at the University of Illinois at
					Urbana-Champaign. Previously, he was a visiting faculty researcher at Google and was instrumental
					in designing and developing the learned TPU cost model used in production. His research interests
					are in automating compiler construction and in building high-performance ML systems. He received
					his Ph.D. and Masters from the Massachusetts Institute of Technology and his B.Sc. from the
					University of Moratuwa. He recently co-led the DARPA ISAT study on "ML Optimized Compilers
					for Heterogeneous Architectures (MOCHA)". He is the recipient of an NSF CAREER Award, an IEEE
					Micro Top Picks honorable mention, the William A. Martin outstanding master's thesis award
					at MIT, a best student paper award, a best paper award, and the university gold medal for his
					B.Sc. He has published work at both top programming languages venues such as PLDI and ASPLOS
					as well as at top machine learning venues such as ICML and NeurIPS.</div></div> <div class="divider"></div> <div class="flex gap-10"><div class="flex-initial"><img alt="Tarek Abdelzaher" class="rounded-lg not-prose w-48 m-0"></div> <div class="flex-1 prose-base"><strong>Tarek Abdelzaher</strong> is a Professor and Willett Faculty Scholar at the Department
					of Computer Science, the University of Illinois at Urbana Champaign. He received his Ph.D.
					in Computer Science from the University of Michigan in 1999. He has authored/coauthored more
					than 300 refereed publications in real-time computing, CPS/IoT, distributed systems, intelligent
					networked sensing, machine learning, and control. He served as Editor-in-Chief of the Journal
					of Real-Time Systems for 20 years, and as Associate Editor of the IEEE Transactions on Mobile
					Computing, IEEE Transactions on Parallel and Distributed Systems, IEEE Embedded Systems Letters,
					the ACM Transaction on Sensor Networks, ACM Transactions on Internet Technology, ACM Transactions
					on Internet of Things, and the Ad Hoc Networks Journal. He chaired (as Program or General Chair)
					several conferences in his area including RTAS, RTSS, IPSN, Sensys, DCoSS, ICDCS, Infocom,
					and ICAC. Abdelzaher's research interests lie broadly in understanding and influencing performance
					and temporal properties of networked embedded, social, and software systems in the face of
					increasing complexity, distribution, and degree of interaction with an external physical environment.
					He is a recipient of the IEEE Outstanding Technical Achievement and Leadership Award in Real-time
					Systems (2012), the Xerox Award for Faculty Research (2011), as well as several best paper
					awards. He is a fellow of ACM and IEEE.</div></div></article></div></div>`);function Ie(r,s){le(s,!1),he(()=>{window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}),ce();var n=fe(),t=i(n),I=i(t),T=i(I),k=i(T),S=e(e(k,!0));a(S);var P=e(e(S,!0));a(P),a(T),a(I),a(t);var C=e(e(t,!0)),_=i(C),U=i(_),x=e(e(U,!0));o(),a(x);var H=e(e(x,!0)),E=e(e(H,!0));o(),a(E);var G=e(e(E,!0)),d=e(e(G,!0)),c=i(d),D=e(i(c)),R=e(e(D,!0));a(R),a(c);var h=e(e(c,!0)),L=e(i(h)),W=e(e(L,!0));a(W),a(h);var u=e(e(h,!0)),Z=e(i(u)),j=e(e(Z,!0));a(j),a(u);var M=e(e(u,!0)),z=e(i(M)),F=e(e(z,!0));a(F),a(M),a(d);var O=e(e(d,!0)),p=e(e(O,!0)),m=i(p),B=i(m);l(B,"src",ve),a(m);var K=e(e(m,!0));o(),a(K),a(p);var V=e(e(p,!0)),g=e(e(V,!0)),v=i(g),q=i(v);l(q,"src",ge),a(v);var J=e(e(v,!0));o(),a(J),a(g);var Q=e(e(g,!0)),f=e(e(Q,!0)),w=i(f),X=i(w);l(X,"src",me),a(w);var Y=e(e(w,!0));o(),a(Y),a(f);var $=e(e(f,!0)),y=e(e($,!0)),b=i(y),ee=i(b);l(ee,"src",pe),a(b);var ae=e(e(b,!0));o(),a(ae),a(y);var ie=e(e(y,!0)),N=e(e(ie,!0)),A=i(N),ne=i(A);l(ne,"src",ue),a(A);var re=e(e(A,!0));o(),a(re),a(N),a(_),a(C),a(n),te(r,n),de()}export{Ie as component};
