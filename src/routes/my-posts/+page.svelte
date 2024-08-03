<script>
  
    export let data;
    import * as Card from "$lib/components/ui/card";
    //  let bob = data.map(par => par.content)
    console.log(typeof data)
   
</script>   


<div class="text-center text-2xl p-2 m-2">Welcome to my-posts page</div>
<div>{data[0].content}</div>


<div class="grid-cols-3 grid gap-3 p-4 m-4">
    
    
    <Card.Root>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </Card.Root>
    <Card.Root>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </Card.Root>
    <Card.Root>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </Card.Root>

</div>




