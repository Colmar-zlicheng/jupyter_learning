< !DOCTYPE html >
    <html>
        <body>

            <p id="demo"></p>

            <script>
                var day;
                switch (new Date().getDay()) {
  case 0:
                day = "周日";
                break;
                case 1:
                day = "周一";
                break;
                case 2:
                day = "周二";
                break;
                case 3:
                day = "周三";
                break;
                case 4:
                day = "周四";
                break;
                case 5:
                day = "周五";
                break;
                case  6:
                day = "周六";
}
                document.getElementById("demo").innerHTML = "今天是" + day;
            </script>

        </body>
    </html>
