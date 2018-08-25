# PHP - MVC FRAMEWORK
 - php web framework based on mvc model (model, view, controller)
# How to use
 - 1. Download and configure your web server to view only /public ('/public must be enrty point of this framework')
 - 2. MVC Framework has routes
  - 2.1 Routes is 'config/web/routes.php'
  - 2.2 To make route write <code>Route::get('/',"Welcome@index")</code>
   - 2.2.1 First param will be url, first part of second param will be controller and second part will be method
  - 2.3 Method return value or any view 
   - 2.3.1 To return view write ('return Base::View('Welcome')')
    - 2.3.1.1 Param is name of view
 - 3. Controllers is php class with method & namespace
 - 4. View is html file.