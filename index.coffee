exports.calculateRatio = (times) ->
  inside = []
  outside = []
  for i in [1..times]
    x = Math.random()
    y = Math.random()
    if Math.sqrt (Math.pow x,2) + (Math.pow y,2) <= 1
      inside.push [ x, y ]
    else
      outside.push [ x, y ]
  inside.length / times