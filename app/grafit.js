function onSwaggerButtonClick()
{
    window.swagger = new SwaggerClient
        (
            {
                url: "http://api.gra.fit:5000/swagger.json",
                useJQuery: true,
                success: function()
                {
                    // swagger.apis.metrics.get_metric_resource_list
                    swagger.apis.default.get_metric_resource_list
                    (
                        {responseContentType: 'application/json'},
                        function(data)
                        {
                            document.getElementById("mydata").innerHTML = JSON.stringify(data.obj);
                        }
                    );
                }
            }
        );
}
