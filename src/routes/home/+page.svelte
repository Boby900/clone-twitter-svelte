<script>
    import  logo from "$lib/assets/icons8-x-64.png";
    import { Input } from "$lib/components/ui/input"
</script>
<nav>
    <ul class="flex justify-around text-2xl p-2 m-2">
        <li><a href="/"><img src={logo} alt="logo"></a> </li>
        <li><a href="/home">For You</a></li>
        <li><a href="/my-posts">Your posts</a></li>
        <li><a href="/post">Create new post</a></li>
        <li>

            <Input type="search" placeholder="Search" class="max-w-xs" />
        </li>
     
    </ul>
</nav>