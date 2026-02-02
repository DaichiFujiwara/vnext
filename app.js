const express = require('express')
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());

const fakeData = {
  "data": [
    {
      "type": "testType",
      "id": "test",
      "attributes": {
        "digitalKeys": [
          {
            "slotId": "1",
            "friendlyName": "Ota's phone_0",
            "keyType": "OWNER",
            "deviceType": "PHONE",
            "status": 1
          },
          {
            "slotId": "2",
            "friendlyName": "Ota's phone",
            "keyType": "SHARED",
            "deviceType": "PHONE",
            "status": 1
          },
        ]
      }
    }
  ]
};

// Define a GET endpoint
app.get('/api/digital-key/:vehicleId/key-status', (req, res) => {
  res.json(fakeData);
});

// Define a POST endpoint with a vehicleId parameter
app.post('/api/digital-key/:vehicleId/sendPairingEmail', (req, res) => {
  const vehicleId = req.params.vehicleId;
  const { token } = req.body; // Assuming the token is sent in the request body

  // // Example logic to check for authorization
  // if (!token) {
  //   return res.status(401).json({
  //     errors: [
  //       {
  //         status: "Unauthorized",
  //         code: "401000",
  //         title: "Unauthorized",
  //         detail: "Invalid or missing token"
  //       }
  //     ]
  //   });
  // }

  // If the token is valid, respond with success
  // Here you can implement your logic to send the pairing email
  res.status(200).json({
    message: "Pairing email sent successfully",
    vehicleId: vehicleId
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//https.createServer(options, app).listen(port, () => {
//  console.log('Server listening on port ' + port);
//});
