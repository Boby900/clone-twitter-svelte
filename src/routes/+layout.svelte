<script>
	

    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
   
  </script>
  <nav  >
    
    <ul class="text-2xl h-[100px] bg-zinc-500 align-middle pt-8  justify-around flex">
   
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>

    <ModeWatcher />
  <slot />