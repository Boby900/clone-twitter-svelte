<script>
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { Input } from "$lib/components/ui/input";	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { enhance } from '$app/forms';


// import { Menu } from "lucide-react";
// import { Package2 } from "lucide-react";
</script>
    <div class="border-2 h-[100px]">
      <header class="flex  justify-around pt-8 bg-inherit">
        <div class="">
          <a
            href="/"
            class="flex bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600   items-center gap-2 font-semibold"
          >
            <div class="md:hidden">
              <DropdownMenu.Root>
                <DropdownMenu.Content>
                  <DropdownMenu.Item>
                    <a
                      href="/"
                      aria-label="feedback"
                      class="hover:underline underline-offset-8 ... decoration-sky-500 focus:underline "
                    >
                     Home
                    </a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <a
                      href="/"
                      class="hover:underline underline-offset-8 ... decoration-sky-500 focus:underline "
                    >
                      Dashboard
                    </a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <a
                      href="/pricing"
                      class="hover:underline underline-offset-8 ... decoration-sky-500 focus:underline "
                    >
                      Pricing
                    </a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <a
                      href="/upload"
                      aria-label="feedback"
                      class="hover:underline underline-offset-8 ... decoration-sky-500 focus:underline "
                    >
                      Feedback
                    </a>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
            <span class="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hidden md:block">
              Clone-X
            </span>
          </a>
        </div>
        <div>
          <Input placeholder="Search for your products" />
        </div>

        <div class="hidden md:block">
          <a
            href="/"
            class="hover:underline underline-offset-8 ... decoration-sky-500 focus:underline "
          >
            Dashboard
          </a>
        </div>

        <div class="hidden md:block">
          <a
            href="/my-posts"
            class="hover:underline underline-offset-8 ... decoration-sky-500 focus:underline  ... "
          >
            Your Posts
          </a>
        </div>
        <div class="hidden md:block">
          <a
            href="/post"
            aria-label="feedback"
            class="hover:underline ... decoration-sky-500 focus:underline underline-offset-8 ... "
          >
            Create Post
          </a>
        </div>
        <div class="hidden md:block">
         
          <a
          href="/"
          aria-label="feedback"
          class=" hover:underline ... decoration-sky-500 focus:underline underline-offset-8 ... "
        >
          Sign Out
        </a>
        </div>
      </header>
    </div>

<slot />
