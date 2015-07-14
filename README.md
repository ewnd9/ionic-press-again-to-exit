# ionic-press-again-to-exit

## Install

```
$ bower install ionic-press-again-to-exit --save
```

## Usage

```javascript
angular.module('app', [
  'ionic',
  'ngCordova',
  'ionic-press-again-to-exit',
])
.run(function($ionicPressAgainToExit, $cordovaToast) {
  $ionicPressAgainToExit(function() {
    $cordovaToast.show('Press again to exit', 'short', 'center');
  });
});
```

## License

MIT © [ewnd9](http://ewnd9.com)
