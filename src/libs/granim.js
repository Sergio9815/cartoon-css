var granimInstance = new Granim({
  element: '#canvas-basic',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              ['#121519', '#121519'],
              ['#1c1d1d', '#000000'],
          ]
      }
  }
});
