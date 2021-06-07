canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_1_width=100;
car_1_height=100;

car_2_width=99;
car_2_height=49;

background_image="racing.jpeg";
car_1_image="car1.png";
car_2_image="Car2.png";

car_1_x=10;
car_1_y=0;

car_2_x=10;
car_2_y=100;

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car_1_imgTag=new Image();
    car_1_imgTag.onload=uploadCar1;
    car_1_imgTag.src=car_1_image;

    car_2_imgTag=new Image();
    car_2_imgTag.onload=uploadCar2;
    car_2_imgTag.src=car_2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car_1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}

function uploadCar2() {
    ctx.drawImage(car_2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (keyPressed=='38') {
        up1();
        console.log("car 1 up");
    }

    if (keyPressed=='40') {
        down1();
        console.log("car 1 down");
    }

    if (keyPressed=='37') {
        left1();
        console.log("car 1 left");
    }

    if (keyPressed=='39') {
        right1();
        console.log("car 1 right");
    }

    if (keyPressed=='87') {
        up2();
        console.log("car 2 up");
    }

    if (keyPressed=='65') {
        left2();
        console.log("car 2 left");
    }

    if (keyPressed=='83') {
        down2();
        console.log("car 2 down");
    }

    if (keyPressed=='68') {
        right2();
        console.log("car 2 right");
    }
}

function up1() {
    if (car_1_y>=-10) {
        car_1_y=car_1_y-10;
        console.log("Car 1 X = "+car_1_x+" and Car 1 Y = "+car_1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down1() {
    if (car_1_y<=510) {
        car_1_y=car_1_y+10;
        console.log("Car 1 X = "+car_1_x+" and Car 1 Y = "+car_1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function left1() {
    if (car_1_x>=10) {
        car_1_x=car_1_x-10;
        console.log("Car 1 X = "+car_1_x+" and Car 1 Y = "+car_1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function right1() {
    if (car_1_x<=690) {
        car_1_x=car_1_x+10;
        console.log("Car 1 X = "+car_1_x+" and Car 1 Y = "+car_1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

    if (car_1_x>689) {
        console.log("car 1 won!");
        document.getElementById("game_status").innerHTML="Car 1 Won!!"
    }
}

function up2() {
    if (car_2_y>=10) {
        car_2_y=car_2_y-10;
        console.log("Car 2 X = "+car_2_x+" and Car 2 Y = "+car_2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function left2() {
    if (car_2_x>=10) {
        car_2_x=car_2_x-10;
        console.log("Car 2 X = "+car_2_x+" and Car 2 Y = "+car_2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down2() {
    if (car_2_y<=540) {
        car_2_y=car_2_y+10;
        console.log("Car 2 X = "+car_2_x+" and Car 2 Y = "+car_2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function right2() {
    if (car_2_x<=690) {
        car_2_x=car_2_x+10;
        console.log("Car 2 X = "+car_2_x+" and Car 2 Y = "+car_2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }

    if (car_2_x>689) {
        console.log("car 2 won!");
        document.getElementById("game_status").innerHTML="Car 2 Won!!"
    }
}