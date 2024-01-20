$(".open-drawer").click(function (e) {
  $(".d-none-custom").animate(
    {
      width: "250px",
    },
    1000
  );
});

$(".close-text").click(function (e) {
  console.log("Open Drawer");

  $(".d-none-custom").animate(
    {
      width: "0px",
    },
    1000
  );
});

window.onload = function () {
  timer("1 January 2000 12:00:00");
};

function updateCountdownDisplay(days, hours, mins, secs) {
  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);
}

function calculateTimeDifference(dateTo) {
  let futureDate = new Date(dateTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  return futureDate - now;
}

function timer(dateTo) {
  const timeDifference = calculateTimeDifference(dateTo);

  const days = Math.floor(timeDifference / (24 * 60 * 60));
  const hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  const mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  const secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  updateCountdownDisplay(days, hours, mins, secs);

  setInterval(function () {
    timer(dateTo);
  }, 1000);
}

var limit = 100;
$("textarea").keyup(function () {
  let length = document.getElementById("text-lenght").value.length;
  var countInput = limit - length;
  if (countInput <= 0) {
    $("#condition").text("Your limitaion Message Finish");
  } else {
    $("#condition").text(countInput + " Characyer Reamining");
  }
});
