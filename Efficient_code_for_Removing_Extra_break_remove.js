 <script>
 $(document).ready(function() {
            $('.lineremove').each(function() {


                if($(this).find('p').length>=2)
                {
                    $(this).html( fixBRR($(this).html()));
                }
                if($(this).find('p').length==1)
                {
                    $(this).html( fixBR($(this).html()));
                }
                if($(this).find('p').length==0)
                {
                    $(this).html( fixBR($(this).html()));
                }


//previous
                //$(this).find('p').contents().unwrap();

                //$(this).html( fixBR($(this).html()));

            });
        });

        $(document).ready(function() {
            $('.lineremoves').each(function() {


                if($(this).find('p').length>=2)
                {
                    $(this).html( fixBR($(this).html()));
                }
                if($(this).find('p').length==1)
                {
                    $(this).html( fixBR($(this).html()));
                }
                if($(this).find('p').length==0)
                {
                    $(this).html( fixBR($(this).html()));
                }

          /*      if($(this).find('p').length==1)
                {
                    $(this).html( fixBR($(this).html()));
                }
                if($(this).find('p').length==0)
                {
                    $(this).html( fixBR($(this).html()));
                }
*/

//previous
                //$(this).find('p').contents().unwrap();

                //$(this).html( fixBR($(this).html()));

            });
        });

        function fixBR (str) {
            var regex = /(<br\s*\/?>\s*){2,}/g;
            return str.replace(regex, '<br /><br />');
        }

        function fixBRR (str) {
            var regex = /(<br\s*\/?>\s*){2,}/g;
            return str.replace(regex, '');
        }
 </script>
