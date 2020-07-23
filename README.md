# Customize Angular Slideables
Customize Angular Slideables Script Support with or without jquery.

View Demo: 

**Examples**

- Single row

``` html
<section ng-app="myApp">
    <h1 slide-toggle="#toggle-id">Click here</h1>
    <div id="toggle-id" class="slideable">
      <div class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the               1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but               also the leap into electronic typesetting, remaining essentially unchanged.
      </div>
    </div>
</section>
```

- Multiple rows

``` html
<section ng-app="myApp">
  <div ng-repeat="row in rows track by $index">
    <h1 slide-toggle="#toggle-id-{{$index}}">Click here</h1>
    <div id="toggle-id-{{$index}}" class="slideable">
      <div class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the               1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but                also the leap into electronic typesetting, remaining essentially unchanged.
      </div>
    </div>
  </div>
</section>
```

**OPTIONAL ATTRIBUTES**
``` html
<div id="toggle-id" class="slideable" easing="linear" duration="5s">…</div>
```
