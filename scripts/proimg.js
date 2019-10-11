$(function() {
        var imgBox = $("#sl_ImgBox"), 
        imgList = $("#sl_ImgList"), 
        imgListDiv = $("#sl_ImgList div"), 
        firstSrc = imgListDiv.find("img").first().attr("src"), 
        firstJqzSrc = imgListDiv.find("img").first().attr("jqimg");
        imgBox.html('<div class="sl_zoom"><img src="' + firstSrc + '" jqimg="' + firstJqzSrc + '" /></div>');
        var zoom_div = $(".sl_zoom"), imgBox_img = $(".sl_zoom img");
        imgList.carouFredSel({
            auto: false,
            circular: false,
            infinite: false,
            prev: "#imgList_prev",
            next: "#imgList_next",
            items: { visible: 4 },
            scroll: { items: 1 }
        });


        zoom_div.jqueryzoom({
            xzoom: 306,//设置放大窗口的宽度
            yzoom: 270,//设置放大窗口的高度
            offset: 10,
            position: "right",//放大窗口显示的位置
            preload: 1,
            lens: 1
        });
        imgBox_img.vcenter(250, 250);//产品展示图片等比例缩放居中
        vhCenter();

        imgList.find("div:eq(0)").addClass("active");
        imgListDiv.find("img").each(function() {
            $(this).vcenter('100%', '100%');//产品小图片等比例缩放居中
        });


        imgListDiv.click(function() {
            if ($(this).hasClass("active")) return;
            $(this).addClass("active").siblings().removeClass("active");
            imgBox_img.attr("jqimg", $(this).find("img").attr("jqimg")).
            attr("src", $(this).find("img").attr("src")).vcenter(250, 250);
            vhCenter();
        });




        function vhCenter() {
            zoom_div.css({
               "margin-top": imgBox_img.css(""),
                "margin-left": imgBox_img.css(""),
                width: imgBox_img.width('100%'),
                height: imgBox_img.height('100%')
            });
            imgBox_img.css({ "padding-top":0, "padding-left": 0, "padding-right": 0, "padding-bottom": 0 });

            if (imgBox_img.attr("jqimg") == "") {
                $(".jqMagnifier").remove();
            }
            else {
                $(".jqMagnifier").remove();
                $("#sl_PicShow").append('<div class="jqMagnifier"></div>');
            }
        };
    });