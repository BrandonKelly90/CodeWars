function findBall(scales, ball_count) {

// Make ball count divisible by 3 so that you can do the splitting up of the groups of balls
    function roundUpBalls (){
        var ballNumber;
        if (ball_count % 3 === 1){
            ballNumber = ball_count + 1;
        }
        else if (ball_count % 3 === 2){
            ballNumber = ball_count + 2;
        }
        else {
            ballNumber = ball_count;
        }
    };

    // Create array splitting function to divide into equal sized arrays
    function arraySplitter (array, splitFactor){
        var newArray = [];
        while (array.length) {
            newArray.push(array.splice(0, splitFactor));
        }
        return newArray;
    };
    var scalesArray = arraySplitter(scales, 3);

// run getWeight to compare
    function getWeight (scalesAray[0], scalesAray[1]){
        var result;
            if (scalesArray[0] > scalesArray[1]){
            ///what to do next
            return result = scalesArray[0];
        }
        else if (scalesArray[0] < scalesArray[1]) {
            /// what to do next;
            return  result = scalesArray[1]
        }
        else {
            /// utilitze the third array scalesArray[2]
            return  result = scalesArray[2];
        }

        //add recursion
        if (result) {

        }
    };
}
