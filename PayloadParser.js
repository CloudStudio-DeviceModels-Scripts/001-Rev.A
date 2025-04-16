function parseUplink(device, payload)
{
    var parsed = payload.asJsonObject();
    // env.log( device.endpoints.byType(endpointType.temperatureSensor === null));
    env.log(parsed)

    var temperatureSensor = device.endpoints.byType(endpointType.temperatureSensor);
        
    if (temperatureSensor){
        temperatureSensor.updateTemperatureSensorStatus(parsed.object.temperature);
    }

     var humiditySensor = device.endpoints.byType(endpointType.humiditySensor);
     if (humiditySensor){
        humiditySensor.updateHumiditySensorStatus(parsed.object.humidity);   
    }
}