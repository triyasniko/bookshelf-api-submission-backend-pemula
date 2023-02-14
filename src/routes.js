const routes=[
    {
        path:'/',
        method:'GET',
        handler: function(request, h){
            return "hello, ini root";
        }
    },
    {
        path:'/books',
        method:'POST',
        handler:function(request,h){
            return "books";
        }
    },
    {
        path:'/books',
        method:'GET',
        handler:function(request,h){

        }
    },
    {
        path:'/books/{bookId}',
        method:'GET',
        handler:function(request,h){

        }
    },
    {
        path:'/books/{bookIdWithFinishedReading}',
        method:'GET',
        handler:function(request,h){

        }
    },
    {
        // invalid ID
        path:'/books/9898989',
        method:'GET',
        handler:function(request,h){

        }
    },
    {
        path:'/books/{bookId}',
        method:'GET',
        handler:function(request,h){
            
        }
    }

]
module.exports=routes;