function onSwaggerButtonClick()
{
    // Load the Swagger data
    window.swagger = new SwaggerClient
        (
            {
                url: "http://localhost:5000/swagger.json",
                useJQuery: true,
                success: function() { onGetSwaggerData() }
            }
        );
}

function onGetSwaggerData()
{
    // Get all metrics
    window.swagger.apis.v1.get_metric_resource_list
    (
        {responseContentType: 'application/json'},
        onGetMetricList
    );
}

function onGetMetricList(response)
{
    data = response.obj
    
    // Show the raw data
    document.getElementById("test-metrics").innerHTML = JSON.stringify(data);
    
    // Put data into chart
    trent_graph = document.getElementById("test-chart");
    trent_graph.cols = [{"label":"Month", "type":"string"}, {"label":"Days", "type":"number"}];
    trent_graph.rows = [["January", 3],["February", 1],["March", 2]]
    
    // Choose the first metric
    theMetricId = 1
    
    // Get all data for this metric
    window.swagger.apis.v1.get_datum_resource_list
    (
        {metric_id: theMetricId},
        {responseContentType: 'application/json'},
        onGetDataList
    );
}

function onGetDataList(response)
{
    data = response.obj
    
    // Show the raw data
    document.getElementById("test-data").innerHTML = JSON.stringify(data);
    
    // Put data into chart
    trent_graph = document.getElementById("test-chart");
    trent_graph.cols = [{"label":"Month", "type":"string"}, {"label":"Days", "type":"number"}];
    trent_graph.rows = [["January", 3],["February", 1],["March", 2]]
}