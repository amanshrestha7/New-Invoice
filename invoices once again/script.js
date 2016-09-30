$(function() {
    var imgData = [],
        uploadLabel = $('#upload')
        preview = $('.preview');
        var filesSum = [];

    $("#post-image").on("change", function()
    {
        var files = !!this.files ? this.files : [];

        if (!files.length || !window.FileReader) return;

        if(files.length){
          for(var i=0;i<files.length;i++){


            createImage(files[i]);
          }

        }

    });
    function createImage(file){
      console.log(file.type);
      if (/^image/.test( file.type)){
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onloadend = function(){
              //filesSum.push(this.result);
              //filesSum.push(file.name);
              preview.find('ul').prepend('<li style="background-image:url('+this.result+');background-size:cover;background-position:center center;" class="in"><i class="fa fa-times fa-2x">Delete Photo</i></li>');
              //uploadLabel.html(filesSum.length+"file(s)<span>(click to upload more)</span>");
          }
      }
    }

    //removing thumbnail
    $('ul').on('click','li i',function(e){
      var target = $(e.target),
          index = Math.abs(target.parent().index() - filesSum.length)-1;
          target.parent().addClass('out');
          setTimeout(function(){
            target.parent().remove();
          },800);

          //filesSum.splice(index,1);
          //uploadLabel.html(filesSum.length+"file(s)<span>(click to upload more)</span>");
    });


    //onclick show add client

  $(".billbox").click(function(){
    $("#addclient").show();
    $("#tohide").hide();
    $("#myDropdown").show();
  });




    //For auto expand width(input type text)

    $.fn.textWidth = function(text, font) {
    
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
    
    return $.fn.textWidth.fakeEl.width();
};

$('.width-dynamic').on('input', function() {
    var inputWidth = $(this).textWidth();
    $(this).css({
        width: inputWidth
    })
}).trigger('input');


function inputWidth(elem, minW, maxW) {
    elem = $(this);
    console.log(elem)
}

var targetElem = $('.width-dynamic');

inputWidth(targetElem);
});


//dropdown menu with images

//Dropdown plugin data
var ddData = [
    {
        text: "Facebook",
        value: 1,
        selected: false,
        description: "About Us",
        imageSrc: "images/baby2.jpg"
    },
    {
        text: "Twitter",
        value: 2,
        selected: false,
        description: "Contact Us",
        imageSrc: "images/cat.jpg"
    },
    {
        text: "LinkedIn",
        value: 3,
        selected: false,
        description: "Find Us",
        imageSrc: "images/horse.jpg"
    },
    {
        text: "Foursquare",
        value: 4,
        selected: false,
        description: "Miss Us",
        imageSrc: "images/baby1.jpg"
    }
];


$('#myDropdown').ddslick({
    data:ddData,
    width:195,
    selectText: "Select your Clients",
    imagePosition:"left",
    onSelected: function(selectedData){

        $('#fname').val(selectedData.selectedData.description);
        $('#cname').val(selectedData.selectedData.text);
        $('#myDropdown').hide();

        //$("").addClass("add-new-class");
        $('.billbox').css({
            'border': 'none',
        });
        $('.billbox:hover').css('background-color', 'transparent');
        $('#addclient input').css({
            'text-align': 'left',
            'font-size': '16px'
        });
        $('#myDropdown').css({
            'margin-top': '0px'
        });
    }   
});


  //plugin date picker

  $( ".date" ).datepicker({ 
    //minDate: "0", 
    maxDate: "+2M +10D",
  });


  //auto expand textarea(no scroll and display all text)


  $(".details .addline").click(function(){
    //$(".details .item-detail").show();
    $("#removeit").show();
    $("#smallhr").show();
  });

  $(".addline").click(function () {
    $("<div class='item-detail'><div class='descript-item'><input type='text' placeholder='Enter item name'></input><input type='text' placeholder='Enter item description' class='width-dynamic proba dva'></input></div><div class='descript-rate'><input type='text' placeholder='0.00'><br></input><input type='text' placeholder='Add tax'></input></div><div class='descript-qty'><input type='text' placeholder='001'></input></div><div class='descript-total'><input type='text' placeholder='0.00'></input></div></div>").appendTo('#append-here');
  });

  $("#removeit").click(function () {
    $('.item-detail:last-child').remove();
  });


  



  $(".optext textarea").click(function(){
    $(".optext textarea").css('height', '120px');
  });





  //auto expand height of text area

  $(document)
    .one('focus.input', '.autoExpand', function(){
      var savedValue = this.value;
      this.value = '';
      this.baseScrollHeight = this.scrollHeight;
      this.value = savedValue;
    })
    .on('input.input', '.autoExpand', function(){
      var minRows = this.getAttribute('data-min-rows')|0,
         rows;
      this.rows = minRows;
        console.log(this.scrollHeight , this.baseScrollHeight);
      rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
      this.rows = minRows + rows;
    });