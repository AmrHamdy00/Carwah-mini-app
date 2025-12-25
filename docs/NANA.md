

# Getting Started with Nana Mini Apps

This page will help you get started with Nana Mini Apps. You'll be up and running on the fly!

# Nana MiniApp Integration Guide for Third-Party Developers

Nana is a leading e-grocery delivery platform that aims to provide an enriched user experience by allowing third-party miniapps to be seamlessly integrated into its ecosystem. This guide is designed for developers and technical teams from third-party businesses looking to integrate their miniapps with Nana, enabling their services to be offered directly to Nana users.

## Getting Started

### Prerequisites

To successfully integrate your miniapp with Nana, ensure that you have:

* **JavaScript Proficiency**: Experience with JavaScript and at least one of the supported frameworks.
* **Familiarity with Ionic Capacitor Plugins**: Understanding of how to use Ionic Capacitor plugins to access native device features.
* **Access to the Nana MiniApps SDK**: You will receive access to the SDK, which is essential for integration.
* **Code Hosting Repository**: A repository for your miniapp code (e.g., GitHub, GitLab).

### Supported Frameworks

You can develop your miniapp using any of the following JavaScript frameworks:

* React
* Vue
* Taro

## Integration Steps

### 1. Develop Your MiniApp

* **Choose a Framework**: Select one of the supported frameworks based on your project requirements and expertise.
* **Design Your MiniApp**: Develop the user interface and core functionalities of your miniapp, keeping in mind the features you plan to offer.

### 2. Integrate Ionic Capacitor Plugins

To access native features such as location services, camera, and notifications, you must integrate Ionic Capacitor plugins into your miniapp. Permissions to these plugins must be explicitly requested by the third-party service provider.

* **Reference**: [Capacitor Plugins Documentation](https://capacitorjs.com/docs/plugins)
* **Common Plugins**:
  * **Contacts**: Access the user's contacts.
  * **Geolocation**: Access the device's location services.
  * **Camera**: Use the device's camera.
  * **Notifications**: Send local notifications to the user.

### 3. Integrate with Nana MiniApps SDK

The Nana MiniApps SDK allows you to interact with Nana App services, enabling seamless integration and enriching the user experience.

* **User Information Access**:
  * **User Name**: Retrieve the name of the logged-in user.
  * **User ID**: Access the unique ID assigned to the user.
  * **User Address**: Retrieve the user's delivery address.
  * **User Balance**: Access the user's balance within the Nana ecosystem.

* **Available Services**:
  * **Promotion Handling**: Integrate promotions and discounts.
  * **Checkout & Payment**: Facilitate secure payment transactions.
  * **SMS Integration**: Use SMS for notifications or updates.
  * **Push Notifications**: Send important updates directly to users.
  * **Event Sharing**: Share key events or updates within the Nana ecosystem.

### Steps for Integration:

1. **Install the SDK**: Begin by adding the Nana MiniApps SDK to your project. The Nana team will provide package installation instructions.

2. **Initialize the SDK**: Configure the SDK with your miniapp credentials, which will be provided by Nana. This step is critical for authenticating your miniapp with the Nana platform.

3. **Implement Features**: Utilize SDK methods to access Nana’s services and integrate functionalities like user authentication, rewards, checkout, and more.

4. **Submit for Approval**:
   * **Code Review**: Ensure that your miniapp meets Nana's quality standards. Best practices should be adhered to throughout your code.
   * **Repository Access**: Add the Nana development team to your repository for review.
   * **Submission**: Notify the Nana team when your miniapp is ready for a final review.

5. **Deploy Your MiniApp**: Deployment procedures depend on the phase of the workflow, outlined below.

### Deployment Workflow

1. **Documentation & Resources**: Nana will provide comprehensive documentation, including details on Ionic Capacitor and an example repository to get started. You will also receive the Nana MiniApps SDK package.

2. **Development**:
   * Use the provided resources to develop your miniapp.
   * Integrate the SDK and Capacitor plugins to extend the functionality of your miniapp.

3. **Repository Collaboration**:
   * Add the Nana development team to your repository to facilitate review and ensure compatibility.
   * The Nana team will add necessary configuration files to streamline integration.

4. **Building & Deployment**:
   * Nana will build the miniapp and deploy it to Capgo, a live update service for Capacitor apps.
   * A miniapp entry will also be created in Strapi, a headless CMS used by Nana to manage content.

5. **Testing**:
   * Nana will provide a deep link for testing your miniapp within the Nana App to verify its behavior and compatibility.

## Summary

By integrating your miniapp with the Nana platform, you can tap into a vast user base and offer seamless services directly to Nana customers. Following the integration steps outlined above will help you create a smooth, fully-functional miniapp that meets the Nana quality standards.

If you have any questions or run into challenges during the integration process, feel free to reach out to the Nana development team for assistance and support.


# MiniApps Studio

# MiniApps Studio

Welcome to **Nana MiniApps Studio**, a comprehensive integrated development environment (IDE) specifically designed for building, testing, and deploying MiniApps within the Nana ecosystem. This powerful development tool provides developers with a complete toolkit to create seamless, engaging, and high-performance mini-applications.

## Key Features

* **Integrated Development Environment**: Full-featured IDE with syntax highlighting, debugging tools, and project management
* **Real-time Testing**: Live preview and testing capabilities with QR code integration
* **Multi-platform Support**: Available for macOS (Apple Silicon & Intel) and Windows
* **Template Library**: Pre-built templates including React with Taro, TypeScript, Vue.js, and more
* **Project Management**: Import existing projects or create new ones with guided setup
* **Direct Deployment**: Seamless upload and version management for your MiniApps

***

## Download Nana MiniApps Studio

Select the appropriate version for your operating system:

### macOS

<Cards columns={2}>
  <Card title="Apple Silicon (ARM64)" icon="apple">
    Optimized for M1/M2 Mac processors
    [Download v2.0.55 (ARM64)](https://nanafiles.ams3.digitaloceanspaces.com/ide/Nana-Mini-App-Studio-2.0.55-nana.3.arm64.dmg)
  </Card>

  <Card title="Intel-based Mac" icon="apple">
    For Intel-based Mac computers
    [Download v2.0.55 (Intel)](https://nanafiles.ams3.digitaloceanspaces.com/ide/Nana-Mini-App-Studio-2.0.55-nana.3.intel.dmg)
  </Card>
</Cards>

### Windows

<Cards columns={1}>
  <Card title="Windows (x64)" icon="windows">
    Compatible with Windows 10 and later
    [Download v2.0.55 (Windows)](https://nanafiles.ams3.digitaloceanspaces.com/ide/Nana-Mini-App-Studio-2.0.55-nana.3.exe)
  </Card>
</Cards>

***

## Getting Started Guide

Follow these steps to set up and begin developing with Nana MiniApps Studio:

### Step 1: Initial Login Setup

Start by accessing the login functionality located in the bottom-left corner of the application interface.

<Image border={true} src="https://files.readme.io/749453d0bf932e73deee9c9ee57b69051ebe1792ec4d560d9f1676050a940959-111.png" />

### Step 2: Server Configuration

Configure your development server by clicking on **Server Configuration** to establish connection with the Nana platform.

<Image border={true} src="https://files.readme.io/eb48ad92e0b3ee74afe29cfbaffae92476726b933978f3ea0299012995ff4377-222.png" />

### Step 3: Set Server URL

Enter the Nana platform URL: `https://apps.nana.sa` and click **Confirm** to establish the connection.

<Image border={true} src="https://files.readme.io/fe86e9564665e427dfcd23b3a9d4e8b476c3d6b46bcec62cbbb0abb66e8010b0-333.png" />

### Step 4: Authentication

Enter your Nana developer portal credentials (email and password) to authenticate your session and click **Login**.

<Image border={true} src="https://files.readme.io/d0ce7d64d4fd206147e31dea340b6cf2c5c0d1f1ce792cc8ba4349e15a9ca810-444.png" />

***

## Project Management

### Creating a New Project

Click the **+** icon to initiate a new MiniApp project with guided setup options.

<Image border={true} src="https://files.readme.io/443d0189d9e1655c75b4a689fdb5205283a741424d86fc2f8d662ab2314c6442-555.png" />

### Importing Existing Projects

Use **Import Project** to bring existing MiniApp projects into your development environment.

<Image border={true} src="https://files.readme.io/1a68d9fc36532ec39b4b50d9810df805e97fd9ac454f80266963e0a5b3457a5b-666.png" />

### Project Configuration

Configure your project settings including:

* **Project Directory**: Choose your preferred local development folder
* **Project Name**: Set a descriptive name for your MiniApp
* **Project Type**: Select from Mini-Program, Mini-Games, Widgets, and other available types
* **Development Framework**: Choose from React with Taro, TypeScript, Vue.js, or start with a blank project

<Image border={true} src="https://files.readme.io/62b0420e562f267aa4aa730a3d905ab1ceed1780e005c26f03f62e44a0079c5d-777.png" />

### MiniApp ID Integration

Link your development project with the corresponding MiniApp ID created in the Nana developer portal for seamless deployment and testing.

<Image border={true} src="https://files.readme.io/fd8226d2701af58df1fb6c5ed2a6dd2534961dd18a6f45c56dcd59999eff4d51-888.png" />

***

## Development Environment

### Main Interface

The MiniApps Studio provides a comprehensive development workspace with integrated tools for coding, debugging, and project management.

<Image border={true} src="https://files.readme.io/6866bf94c6e8e50ee5dd5ebc2de539e7952f67c46ea353a582da2c101c510d32-999.png" />

***

## Testing and Preview

### QR Code Testing

The integrated QR code feature enables real-time testing on mobile devices:

1. **Generate QR Code**: The IDE automatically generates a QR code for your current development build
2. **Mobile Testing**: Open the Nana app on your mobile device
3. **Scan Code**: Use the QR code scanner within the Nana app
4. **Live Preview**: View your MiniApp with live updates and real data integration from the super app

<Image border={true} src="https://files.readme.io/be9d1c94780ecea0e5f136be4e2887aa15e4a1db5e4a0eeeac6a8f8a5a9d1a13-10.png" />

This feature allows developers to:

* Test real-time changes instantly
* Validate data flow from the super app to your MiniApp
* Ensure proper functionality across different device configurations
* Debug user interface and user experience elements

***

## Deployment

### Version Management and Upload

Deploy your completed MiniApp directly from the development environment:

1. **Version Control**: Specify the version number for your release
2. **MiniApp ID Validation**: Ensure correct MiniApp ID association
3. **Upload Process**: Initiate the upload to the Nana platform
4. **Deployment Confirmation**: Confirm successful deployment

<Image border={true} src="https://files.readme.io/d58a43100a9b8e558634eecc2e8c0254b3536bdf53b48d35af5959ad356dd32c-110.png" />

***

## Next Steps

After setting up Nana MiniApps Studio:

1. **Explore Templates**: Familiarize yourself with available project templates
2. **Review Documentation**: Check out our comprehensive API documentation
3. **Join Community**: Connect with other developers in the Nana developer community
4. **Start Building**: Begin your first MiniApp project

For additional support and resources, visit the [Nana Developer Portal](https://apps.nana.sa) or refer to our comprehensive API documentation.



# MiniApp SDK

Learn how to register and use custom functions from the Nana host app within your mini applications using the MiniApp SDK.

# MiniApp SDK - Custom Function Registration

## Introduction

The MiniApp SDK provides a powerful mechanism for registering and using custom functions from the Nana host app within your mini applications. This feature allows your mini app to access host app functionalities through a standardized API interface, enabling seamless integration between your mini app and the Nana platform.

Custom function registration creates a bridge between your mini app and the host application, allowing you to:

* Access host app services and data
* Leverage existing host app functionalities
* Maintain consistent user experiences across the platform
* Implement custom business logic specific to your mini app needs

## Setting Up Custom Functions

### Step 1: Access the Host App Configuration

1. Navigate to [apps.nana.sa](https://apps.nana.sa)
2. Go to your **Host App** section
3. Navigate to **APIs and Menus**
4. Select **Configure Custom API**

In this section, you'll see all available registered functions from the host app. These functions are categorized as:

* **Public functions**: Available to all mini apps
* **Private functions**: Restricted access based on permissions

### Step 2: Create the Configuration File

In your mini app's root directory, create a new file called `NanaConf.js`. This file will contain the configuration for all the registered functions you want to use in your mini app.

```javascript
module.exports = {
    extApi: [
        {
            name: 'getUserMobile',
            sync: false,
            params: {}
        },
        {
            name: 'getUserName',
            sync: false,
            params: {}
        },
        // Add more registered functions as needed
    ]
}
```

Once configured, you can use the registered functions in your code:

```javascript
const userID = ft.getUserName({
    success: (res) => {
        console.log('User name retrieved successfully:', res);
        // Handle successful response
    },
    fail: (res) => {
        console.log('Failed to get user name:', res);
        // Handle error response
    }
});
```

## Function Parameters Explanation

### User Information Functions

#### getUserId

Retrieves the current user's ID.

**NanaConf.js Configuration:**

```javascript
{
    name: 'getUserId',
    sync: false,
    params: {},
}
```

**Usage Example:**

```javascript
const userID = ft.getUserId({
    success: (res) => {
        console.log('User ID:', res);
        // res contains: {'userId': 'userid'}
    },
    fail: (res) => {
        console.log('Error getting user ID:', res);
    }
});
```

**Response Format:**

```javascript
{'userId': 'userid'}
```

#### getUserMobile

Gets the user's mobile number.

**NanaConf.js Configuration:**

```javascript
{
    name: 'getUserMobile',
    sync: false,
    params: {}
}
```

**Usage Example:**

```javascript
const userMobile = ft.getUserMobile({
    success: (res) => {
        console.log('User Mobile:', res);
        // res contains: {'userMobile': '0555555555'}
    },
    fail: (res) => {
        console.log('Error getting user mobile:', res);
    }
});
```

**Response Format:**

```javascript
{'userMobile': '0555555555'}
```

#### getUserName

Fetches the user's name.

**NanaConf.js Configuration:**

```javascript
{
    name: 'getUserName',
    sync: false,
    params: {}
}
```

**Usage Example:**

```javascript
const userName = ft.getUserName({
    success: (res) => {
        console.log('User Name:', res);
        // res contains: {'userName': 'nawaf dallah'}
    },
    fail: (res) => {
        console.log('Error getting user name:', res);
    }
});
```

**Response Format:**

```javascript
{'userName': 'nawaf dallah'}
```

#### getAppLang

Returns the current app language.

**NanaConf.js Configuration:**

```javascript
{
    name: 'getAppLang',
    sync: false,
    params: {}
}
```

**Usage Example:**

```javascript
const appLang = ft.getAppLang({
    success: (res) => {
        console.log('App Language:', res);
        // res contains: {'language': 'ar'}
    },
    fail: (res) => {
        console.log('Error getting app language:', res);
    }
});
```

**Response Format:**

```javascript
{'language': 'ar'}
```

#### userLoggedIn

Checks if user is logged in.

**NanaConf.js Configuration:**

```javascript
{
    name: 'userLoggedIn',
    sync: false,
    params: {}
}
```

**Usage Example:**

```javascript
const loginStatus = ft.userLoggedIn({
    success: (res) => {
        console.log('User logged in status:', res);
        // res contains: {'isLoggedIn': true}
        if (res.isLoggedIn) {
            // User is logged in
        } else {
            // User is not logged in
        }
    },
    fail: (res) => {
        console.log('Error checking login status:', res);
    }
});
```

**Response Format:**

```javascript
{'isLoggedIn': true}
```

#### getUserToken

Retrieves the user's authentication token.

**NanaConf.js Configuration:**

```javascript
{
    name: 'getUserToken',
    sync: false,
    params: {}
}
```

**Usage Example:**

```javascript
const userToken = ft.getUserToken({
    success: (res) => {
        console.log('User Token:', res);
        // res contains: {'token': 'hjgds8726382ddshc87@879...'}
        // Use this token for authenticated API calls
    },
    fail: (res) => {
        console.log('Error getting user token:', res);
    }
});
```

**Response Format:**

```javascript
{'token': 'hjgds8726382ddshc87@879...'}
```

#### getUserAddress

Gets the user's address information.

**NanaConf.js Configuration:**

```javascript
{
    name: 'getUserAddress',
    sync: false,
    params: {}
}
```

**Usage Example:**

```javascript
const userAddress = ft.getUserAddress({
    success: (res) => {
        console.log('User Address:', res);
        // res contains complete address object
    },
    fail: (res) => {
        console.log('Error getting user address:', res);
    }
});
```

**Response Format:**

```javascript
{
    'address': {
        "address_id": "cb175f5e29",
        "manual_location": null,
        "type_second_info": "",
        "state": "الرياض",
        "city": "الرياض",
        "title": "Office",
        "is_supported": 1,
        "latitude": "24.764998609744307",
        "type_first_info": "",
        "type": null,
        "zip_code": null,
        "kind": "first",
        "country": "Saudi Arabia",
        "longitude": "46.71348897092447",
        "manually_update_title": null,
        "isManual": null,
        "food_city_id": 1
    }
}
```

### Commerce Functions

#### addToCart

Adds an item to the shopping cart.

**NanaConf.js Configuration:**

```javascript
{
    name: 'addToCart',
    sync: false,
    params: {
        retailer_id: '',
        pid: '',
        quantity: 0,
        image: '',
        price: 0.0,
        promotionId: '',
        name: '',
        addedFrom: '',
        resolvedBidId: '',
        pricingStyle: '',
    }
}
```

**Usage Example:**

```javascript
const addItemResult = ft.addToCart({
    retailer_id: 'retailer_123',     // (string) The retailer identifier
    pid: 'product_456',              // (string) Product identifier
    quantity: 2,                     // (number) Quantity of items to add
    image: 'https://example.com/product-image.jpg',  // (string) Product image URL
    price: 29.99,                    // (number) Product price
    promotionId: 'promo_789',        // (string) Promotion identifier if applicable
    name: 'Sample Product',          // (string) Product name
    addedFrom: 'miniapp',            // (string) Source where item was added from
    resolvedBidId: 'bid_101',        // (string) Resolved bid identifier
    pricingStyle: 'standard',        // (string) Pricing style information
    success: (res) => {
        console.log('Item added to cart successfully:', res);
        // res contains: {'success': true, 'message': 'Product added to cart!'}
    },
    fail: (res) => {
        console.log('Failed to add item to cart:', res);
        // Handle error response
    }
});
```

**Response Format:**

```javascript
{'success': true, 'message': 'Product added to cart!'}
```

#### orderPayment

Processes order payment by showing a payment bottom sheet with available payment methods (Apple Pay, Mada, etc.). **Important**: You must first create a payment session using the API before calling this function.

**NanaConf.js Configuration:**

```javascript
{
    name: 'orderPayment',
    sync: false,
    params: {
        data: {},
    }
}
```

**Step 1: Get User Token**

First, you need to get the user's authentication token:

```javascript
ft.getUserToken({
    success: (userTokenRes) => {
        console.log('User Token:', userTokenRes.token);
        // Use this token to create payment session
        createPaymentSession(userTokenRes.token);
    },
    fail: (res) => {
        console.log('Error getting user token:', res);
    }
});
```

**Step 2: Create Payment Session**

Create a payment session using the API:

```javascript
async function createPaymentSession(userToken) {
    const miniAppApiKey = 'your_miniapp_api_key'; // Your mini app API key
    
    try {
        const response = await new Promise((resolve, reject) => {
            wx.request({
                url: 'https://miniapps.nana.sa/api/v2/mobile-user-activities/create-payment-session',
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'miniapp-api-key': miniAppApiKey,
                    'miniapp-user-token': `Bearer ${userToken}` 
                },
                data: {
                    amount: 10,           // (number) Payment amount
                    reference: 'order_ref_12345'  // (string) Unique payment reference
                },
                success: (res) => {
                    resolve(res.data);
                },
                fail: (err) => {
                    reject(new Error(`Network Error: ${err.errMsg}`));
                }
            });
        });

        if (response.success) {
            // Get the mini app ID
            const appInfo = wx.getAccountInfoSync();
            const appId = appInfo.miniProgram.appId;
            
            // Add mini app ID to the response data
            response.data.mini_app_id = appId;
            
            // Now call orderPayment with the session data
            processPayment(response.data);
        } else {
            console.error('Failed to create payment session:', response);
        }
    } catch (error) {
        console.error('Error creating payment session:', error);
    }
}
```

**Step 3: Process Payment**

Use the payment session data with orderPayment:

```javascript
function processPayment(paymentSessionData) {
    ft.orderPayment({
        data: paymentSessionData,  // (object) The complete payment session data from API response
        success: (res) => {
            console.log('Payment processed successfully:', res);
            // Handle successful payment
            // The payment bottom sheet will be shown with available methods
        },
        fail: (res) => {
            console.log('Payment failed:', res);
            // Handle payment failure
        }
    });
}
```

**Complete Payment Workflow Example:**

```javascript
async function handlePayment() {
    try {
        // Step 1: Get user token
        ft.getUserToken({
            success: async (userTokenRes) => {
                try {
                    // Step 2: Create payment session
                    const miniAppApiKey = 'your_miniapp_api_key';
                    
                    const sessionResponse = await new Promise((resolve, reject) => {
                        wx.request({
                            url: 'https://miniapps.nana.sa/api/v2/mobile-user-activities/create-payment-session',
                            method: 'POST',
                            header: {
                                'Content-Type': 'application/json',
                                'miniapp-api-key': miniAppApiKey,
                                'miniapp-user-token': `Bearer ${userTokenRes.token}` 
                            },
                            data: {
                                amount: 10,
                                reference: 'order_ref_12345'
                            },
                            success: (res) => resolve(res.data),
                            fail: (err) => reject(new Error(`Network Error: ${err.errMsg}`))
                        });
                    });

                    if (sessionResponse.success) {
                        // Add mini app ID
                        const appInfo = wx.getAccountInfoSync();
                        sessionResponse.data.mini_app_id = appInfo.miniProgram.appId;
                        
                        // Step 3: Call orderPayment
                        ft.orderPayment({
                            data: sessionResponse.data,
                            success: (res) => {
                                console.log('Payment initiated successfully:', res);
                            },
                            fail: (res) => {
                                console.error('Payment failed:', res);
                            }
                        });
                    }
                } catch (error) {
                    console.error('Error in payment process:', error);
                }
            },
            fail: (res) => {
                console.log('Error getting user token:', res);
            }
        });
    } catch (error) {
        console.error('Payment process failed:', error);
    }
}
```

**Expected Payment Session Response Structure:**

```javascript
{
    "status_code": 200,
    "result": "Operation Completed Successfully",
    "success": true,
    "data": {
        "payment_session_secret": "pss_4db7628a-c555-4f86-93f6-0be2a384abd6",
        "payment_session_token": "YmFzZTY0:eyJpZCI6InBzXzM0SDNPMm81VFZpNHhiblo0QVU1dFFURllrcSIs...",
        "id": "ps_34H3O2o5TVi4xbnZ4AU5tQTFYkq",
        "_links": {
            "self": {
                "href": "https://api.sandbox.checkout.com/payment-sessions/ps_34H3O2o5TVi4xbnZ4AU5tQTFYkq"
            }
        }
        // Additional payment configuration data...
    }
}
```

**What happens after calling orderPayment:**

* A payment bottom sheet will appear in the mini app
* Users can select from available payment methods (Apple Pay, Mada, Credit Card, etc.)
* The payment will be processed through the selected method
* Success/failure/cancel callbacks will be triggered based on the payment result

For more details about the create payment session API, visit: [Payment API Documentation](https://docs.apps.nana.sa/reference/createpaymentsession)

### Navigation Functions

#### closeMiniApp

Closes the current mini app.

**NanaConf.js Configuration:**

```javascript
{
    name: 'closeMiniApp',
    sync: false,
    params: {
        miniAppId: ''
    }
}
```

**Usage Example:**

```javascript
ft.closeMiniApp({
    miniAppId: 'your_miniapp_id',    // (string) The identifier of the mini app to close
    success: (res) => {
        console.log('Mini app closed successfully');
    },
    fail: (res) => {
        console.log('Failed to close mini app:', res);
    }
});
```

#### closeMiniAppAndOpenDeepLink

Closes mini app and opens a deep link.

**NanaConf.js Configuration:**

```javascript
{
    name: 'closeMiniAppAndOpenDeepLink',
    sync: false,
    params: {
        miniAppId: '',
        deepLink: '',   
    }
}
```

**Usage Example:**

```javascript
ft.closeMiniAppAndOpenDeepLink({
    miniAppId: 'your_miniapp_id',    // (string) The identifier of the mini app to close
    deepLink: 'https://nana.sa/profile',  // (string) The deep link URL to open
    success: (res) => {
        console.log('Mini app closed and deep link opened successfully');
    },
    fail: (res) => {
        console.log('Failed to close mini app and open deep link:', res);
    }
});
```

## Configuration Properties

| Property  | Type            | Required | Description                                                                                                                                                                                  |
| --------- | --------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | string          | yes      | Custom API name                                                                                                                                                                              |
| sync      | boolean         | no       | Is it a synchronous API?                                                                                                                                                                     |
| overwrite | boolean         | no       | Whether to overwrite the API with the same name                                                                                                                                              |
| pluginId  | array or string | no       | This parameter is valid only when calling loadExtApi in the applet, indicating that the plug-ins in the id list are allowed to use the custom API.                                           |
| scope     | string          | no       | Supported by the basic library 3.5.6 and later. This parameter is valid only when calling loadExtApi in the plugin. The optional values are default, self, all. The default value is default |
| params    | object          | no       | The parameter format can only list the required attributes. If there are no restrictions, you can directly use an empty object.                                                              |

## Best Practices

### Function Naming

* Use clear, descriptive function names that indicate their purpose
* Follow camelCase convention for consistency
* Avoid special characters or spaces in function names

### Error Handling

* Always implement both `success` and `fail` callbacks
* Provide meaningful error messages to help with debugging
* Consider implementing retry logic for critical functions

### Parameter Validation

* Validate required parameters before calling registered functions
* Use TypeScript for better parameter type checking
* Document expected parameter formats and constraints

### Performance Considerations

* Use synchronous functions sparingly as they can block the UI
* Implement loading states for asynchronous operations
* Cache results when appropriate to reduce redundant API calls

## Troubleshooting

### Function Not Found

* Verify the function name matches exactly with the host app registration
* Check if the function is marked as public and accessible to your mini app
* Ensure the `NanaConf.js` file is in the correct location

### Parameter Errors

* Validate that all required parameters are provided
* Check parameter types match the expected format
* Review parameter names for typos or case sensitivity issues

### Callback Issues

* Ensure both `success` and `fail` callbacks are properly defined
* Check for syntax errors in callback functions
* Verify callback parameters are handled correctly

This documentation provides a comprehensive guide for implementing custom function registration in your mini app, enabling powerful integration with the Nana host application.



# Nana Portal

# Nana Portal

## Overview

The Nana Portal is a comprehensive web-based platform that provides users with centralized access to mini-applications and analytics dashboards. This portal serves as a unified interface for managing and monitoring various applications while providing detailed data visualization and insights.

## Key Features

### User Authentication

* **Secure Login System**: Existing users can access their accounts through a streamlined login interface
* **User Registration**: New users can create accounts through the integrated signup process
* **Account Management**: Comprehensive user profile and account settings management

### Dashboard Interface

The main dashboard provides:

* **Mini App Management**: View and access all your available mini applications from a centralized location
* **Data Analytics**: Interactive charts and visualizations displaying key metrics and performance data
* **Real-time Monitoring**: Live updates and status information for all connected applications

## Getting Started

### For Existing Users

If you already have an account, you can log in directly using your credentials:

<Image border={false} src="https://files.readme.io/77f7c362eb084f8bbe2e765e2a6af2b282822da1d538985300aab8f1921665f4-Screenshot_1447-04-28_at_1.18.57_PM.png" />

1. Navigate to the login page
2. Enter your username/email and password
3. Click "Login" to access your dashboard

### For New Users

New users can create an account through the registration process:

<Image border={false} src="https://files.readme.io/d2e90e4b4d9f4f75141f4c0fe6afb95025778b3fcea567f0ee11daf0da9ba754-Screenshot_1447-04-28_at_1.42.55_PM.png" />

1. Click on the "Sign Up" option
2. Complete the registration form with required information
3. Verify your email address (if applicable)
4. Log in with your new credentials

## Dashboard Navigation

### Main Dashboard Interface

Once logged in, you'll be presented with the main dashboard interface:

<Image border={false} src="https://files.readme.io/d71d455d1db59b4239870a7e0764979b49869aa736197714ada44867738b7325-Screenshot_1447-04-28_at_1.48.06_PM.png" />

The main dashboard provides access to all portal features and serves as your central navigation hub.

## Mini App Management

### To-Do's Page

The To-Do's page allows you to review the status of your mini apps and manage their configuration:

<Image border={false} src="https://files.readme.io/fa38f7fc2c466f02a3f44e0d65ce10d4960573103388bdf6de87d988785b4712-Screenshot_1447-05-04_at_2.38.46PM.png" />

From this page you can:

* Review mini app status updates
* Configure custom APIs
* Monitor pending tasks and approvals

### Mini Apps Overview

View all your mini apps and access detailed information for each one:

<Image border={false} src="https://files.readme.io/a0d40a58368453985c2d29f627e755290180d7389201e583b39eeb329b0a4cf0-Screenshot_1447-05-04_at_2.40.04PM.png" />

This section displays:

* Complete list of your mini applications
* Individual app details and metadata
* Quick access to app-specific settings

### Version Management

Manage different versions of your mini apps and control publication:

<Image border={false} src="https://files.readme.io/0105b8d9c694a8bf9702389aae79c56d080d9aa22957bd877b6059e333671af1-version.png" />

Features include:

* **Version Control**: View all available versions of your mini app
* **Publication Management**: Publish versions after admin review
* **QR Code Access**: Scan QR codes directly from the Nana app for testing
* **Version History**: Track changes and updates across versions

## Configuration Management

### Host App Configuration

Configure host applications and manage API settings:

<Image border={false} src="https://files.readme.io/d587015706e2724f467073129163b2d8f1df28676e3e6da6f5472378269dbeed-Screenshot_1447-05-04_at_5.19.10PM.png" />

This section allows you to:

* View host applications for your mini apps
* Access API configuration settings
* Manage menu configuration options

### API Configuration

Manage both public and private custom APIs for your mini apps:

<Image border={false} src="https://files.readme.io/7e1483f57379958fbfa08ce092c2d5d3f87efa4007fd9cf7548e107af6598743-Screenshot_1447-05-04_at_5.19.25PM.png" />

* **Public APIs**: View available public custom APIs
* **Private APIs**: Request access to private custom APIs
* **API Management**: Configure API permissions and access levels

### Menu Configuration

Configure menu settings for your mini applications:

<Image border={false} src="https://files.readme.io/9e150a810e8782ac8f839f9b8cd4b2ad7db0c8c086698f0cab11be761c5dda94-Screenshot_1447-05-04_at_5.19.40PM.png" />

* **Public Menu APIs**: Access standard menu configurations
* **Private Menu APIs**: Request specialized menu access
* **Custom Menu Options**: Tailor navigation to your app's needs

### Privacy Settings

Manage privacy and security settings for your applications:

<Image border={false} src="https://files.readme.io/8eb90552ceefda3d4eeb5e23c41253798694604044b758461927564587ecbbf1-Screenshot_1447-05-05_at_12.52.56PM.png" />

Configure privacy controls and access permissions to ensure your mini apps comply with security requirements.

### URL Management

Add and manage custom URLs for your mini applications:

<Image border={false} src="https://files.readme.io/4fba9544a11ef69d979fbe8feb957c26e8630c18cba9879eae22acab02893d94-Screenshot_1447-05-05_at_12.54.25PM.png" />

* **URL Registration**: Add new URLs for use in your mini app code
* **Admin Approval**: Request approval from administrators for URL access
* **URL Management**: Monitor and update registered URLs

### Host Apps Information

View detailed information about host applications:

<Image border={false} src="https://files.readme.io/b94e9a42507bf770562456579947c9db470b32a834d57d9911af53421ff10c9c-Screenshot_1447-05-05_at_1.02.34PM.png" />

Access comprehensive details about host applications, including configuration, status, and integration information.

## Analytics and Data

### Data Dashboard

Access comprehensive analytics and performance metrics:

<Image border={false} src="https://files.readme.io/1a82e3793e3f434792a25fcdf314e6a21606b83bea182231395d9a437ab9120e-Screenshot_1447-05-05_at_1.06.10PM.png" />

The data dashboard provides:

* **Performance Analytics**: Key metrics and statistics
* **Usage Insights**: User engagement and interaction data
* **Trend Analysis**: Historical performance tracking
* **Custom Reports**: Configurable analytics views

### Device Data Analytics

View device-specific analytics for individual mini applications:

<Image border={false} src="https://files.readme.io/737795f06bb5c3b7ca22bfb784f824964c15886df2f45bc4562cde2ed57f07bb-Screenshot_1447-05-05_at_1.07.40PM.png" />

Features include:

* **Device-Specific Metrics**: Performance data per device type
* **App-Specific Analytics**: Data filtered by individual mini applications
* **User Behavior Tracking**: Detailed usage patterns and interactions
* **Performance Optimization**: Insights for improving app performance

## Navigation and User Interface

The portal features an intuitive interface designed for efficiency:

* **Responsive Design**: Optimized for desktop and mobile devices
* **User-Friendly Navigation**: Clear menu structure and breadcrumbs
* **Customizable Layout**: Personalize your dashboard view
* **Search Functionality**: Quickly find specific applications or data

## Support and Assistance

For technical support or questions about using the Nana Portal:

* Check the help documentation within the portal
* Contact the support team through the integrated help system
* Access community forums for user discussions and tips

## Security Features

The Nana Portal implements robust security measures:

* **Encrypted Data Transmission**: All data is transmitted securely
* **Regular Security Updates**: Continuous security improvements
* **Access Control**: Role-based permissions and access management
* **Audit Logging**: Comprehensive activity tracking and logging

Get User Info

<!DOCTYPE html><html lang="en" style="" data-color-mode="light" class=" useReactApp isRefPage "><head><meta charset="utf-8"><meta name="readme-deploy" content="5.560.0"><meta name="readme-subdomain" content="mini-nana"><meta name="readme-repo" content="mini-nana-4f9e343b1609"><meta name="readme-version" content="1.0"><title>Get User Info</title><meta name="description" content="Nana Mini Apps is a powerful platform designed for small/medium businesses, offering a seamless and customizable solution to create mini apps within the Nana ecosystem. 

Nana Mini Apps allow your business to offer your services to Nana's customers and open a new revenue path for your business to grow." data-rh="true"><meta property="og:title" content="Get User Info" data-rh="true"><meta property="og:description" content="Nana Mini Apps is a powerful platform designed for small/medium businesses, offering a seamless and customizable solution to create mini apps within the Nana ecosystem. 

Nana Mini Apps allow your business to offer your services to Nana's customers and open a new revenue path for your business to grow." data-rh="true"><meta property="og:site_name" content="Nana Mini Apps"><meta name="twitter:title" content="Get User Info" data-rh="true"><meta name="twitter:description" content="Nana Mini Apps is a powerful platform designed for small/medium businesses, offering a seamless and customizable solution to create mini apps within the Nana ecosystem. 

Nana Mini Apps allow your business to offer your services to Nana's customers and open a new revenue path for your business to grow." data-rh="true"><meta name="twitter:card" content="summary_large_image"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:image" content="https://cdn.readme.io/og-image/create?type=reference&amp;title=Get%20User%20Info&amp;projectTitle=Nana%20Mini%20Apps&amp;description=Nana%20Mini%20Apps%20is%20a%20powerful%20platform%20designed%20for%20small%2Fmedium%20businesses%2C%20offering%20a%20seamless%20and%20customizable%20solution%20to%20create%20mini%20apps%20within%20the%20Nana%20ecosystem.%20%0A%0ANana%20Mini%20Apps%20allow%20your%20business%20to%20offer%20your%20services%20to%20Nana's%20customers%20and%20open%20a%20new%20revenue%20path%20for%20your%20business%20to%20grow.&amp;logoUrl=https%3A%2F%2Ffiles.readme.io%2Fcd37bafe4267ff0f05fc3c180a02661a576232a1488c4364b7338678e49eaf7e-small-svgexport-1.png&amp;color=%231a1a1a&amp;variant=light" data-rh="true"><meta name="twitter:image" content="https://cdn.readme.io/og-image/create?type=reference&amp;title=Get%20User%20Info&amp;projectTitle=Nana%20Mini%20Apps&amp;description=Nana%20Mini%20Apps%20is%20a%20powerful%20platform%20designed%20for%20small%2Fmedium%20businesses%2C%20offering%20a%20seamless%20and%20customizable%20solution%20to%20create%20mini%20apps%20within%20the%20Nana%20ecosystem.%20%0A%0ANana%20Mini%20Apps%20allow%20your%20business%20to%20offer%20your%20services%20to%20Nana's%20customers%20and%20open%20a%20new%20revenue%20path%20for%20your%20business%20to%20grow.&amp;logoUrl=https%3A%2F%2Ffiles.readme.io%2Fcd37bafe4267ff0f05fc3c180a02661a576232a1488c4364b7338678e49eaf7e-small-svgexport-1.png&amp;color=%231a1a1a&amp;variant=light" data-rh="true"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><link id="favicon" rel="shortcut icon" href="https://files.readme.io/609db62d77a1f0c31f001331080cbbdc76d70795e6f3de1d760b5c0a9abdcd3b-favicon.ico" type="image/x-icon"><link rel="canonical" href="https://docs.apps.nana.sa/reference/get_user_info"><script src="https://cdn.readme.io/public/js/unauthorized-redirect.js?1766442808655"></script><script src="https://cdn.readme.io/public/js/cash-dom.min.js?1766442808655"></script><link data-chunk="Footer" rel="preload" as="style" href="https://cdn.readme.io/public/hub/web/Footer.7ca87f1efe735da787ba.css">
<link data-chunk="Reference" rel="preload" as="style" href="https://cdn.readme.io/public/hub/web/Reference.87783c5ace01ef1a1bcb.css">
<link data-chunk="Reference" rel="preload" as="style" href="https://cdn.readme.io/public/hub/web/86180.75e3fc491ee8103c63a3.css">
<link data-chunk="Reference" rel="preload" as="style" href="https://cdn.readme.io/public/hub/web/67852.27956553f699a9f09c01.css">
<link data-chunk="SuperHubSearch" rel="preload" as="style" href="https://cdn.readme.io/public/hub/web/SuperHubSearch.6a1ff81afa1809036d22.css">
<link data-chunk="Header" rel="preload" as="style" href="https://cdn.readme.io/public/hub/web/Header.9cca5cd8695b199e13b3.css">
<link data-chunk="Containers-EndUserContainer" rel="preload" as="style" href="https://cdn.readme.io/public/hub/web/Containers-EndUserContainer.c474218e3da23db49451.css">
<link data-chunk="main" rel="preload" as="style" href="https://cdn.readme.io/public/hub/web/main.5d2f0451354f522efba7.css">
<link data-chunk="main" rel="preload" as="style" href="https://cdn.readme.io/public/hub/web/ui-styles.920e73ff7b92c665c736.css">
<link data-chunk="main" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/main.e07b5f7a2b75e29a4818.js">
<link data-chunk="routes-SuperHub" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/routes-SuperHub.dbe847b0851db964caad.js">
<link data-chunk="Containers-EndUserContainer" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/Containers-EndUserContainer.b902e16b915b9acb54fb.js">
<link data-chunk="Header" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/Header.4d0de3e8a1b6c12a6509.js">
<link data-chunk="core-icons-chevron-up-down-svg" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/core-icons-chevron-up-down-svg.7e2a19f84d9f878e947a.js">
<link data-chunk="SuperHubSearch" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/13766.d772ba54efb1db56d529.js">
<link data-chunk="SuperHubSearch" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/46123.69ebc12c0e2bace354b5.js">
<link data-chunk="SuperHubSearch" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/6146.f99bcbc8d654cc36d7c8.js">
<link data-chunk="SuperHubSearch" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/88836.466db83f0dbc8536e6f1.js">
<link data-chunk="SuperHubSearch" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/SuperHubSearch.0ead958728f6efabb0a4.js">
<link data-chunk="core-icons-search-svg" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/core-icons-search-svg.188b3766d12ac3a86b64.js">
<link data-chunk="core-icons-custom-pages-svg" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/core-icons-custom-pages-svg.4af85e07cd1067d86542.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/23781.e74aa301646844cc6f02.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/16563.8ee90e74136685c009f7.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/96652.8b6d209fa5e555ea4745.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/44915.ced5544cfd116c07bcd5.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/14838.f49b570e426ce972793a.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/1714.2c38a72401248177e684.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/49809.bfe85c1aad593aea4118.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/81380.4118a91039e0b316aa16.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/80957.9784e7fabde83e4e0900.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/39602.d6a567a0af33e0e84cf2.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/86805.9855de64ba6674844a32.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/4321.99e7ed648f3bc7e71bd2.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/6349.6701abb57dd60bca35d2.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/67852.8565813f5dcc707f1116.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/53463.c53ae4ddd5e88be8a73a.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/79711.d5a913b5bac72c11f75d.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/86180.4f85a8505e706cde0edd.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/39819.bd1e3d3ce6c88b669b49.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/78749.7ad8f9eae1668e7d5404.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/10949.ec4db2d4c5b8f788b624.js">
<link data-chunk="Reference" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/Reference.0ca3eb11124e3b2f68d3.js">
<link data-chunk="ConnectMetadata" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/ConnectMetadata.cc6ca7d8f0a3ad9514e4.js">
<link data-chunk="core-icons-chevron-down-svg" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/core-icons-chevron-down-svg.1500d4048db301af0f24.js">
<link data-chunk="Footer" rel="preload" as="script" href="https://cdn.readme.io/public/hub/web/Footer.b22d47c399e3de6aa385.js">
<link data-chunk="main" rel="stylesheet" href="https://cdn.readme.io/public/hub/web/ui-styles.920e73ff7b92c665c736.css">
<link data-chunk="main" rel="stylesheet" href="https://cdn.readme.io/public/hub/web/main.5d2f0451354f522efba7.css">
<link data-chunk="Containers-EndUserContainer" rel="stylesheet" href="https://cdn.readme.io/public/hub/web/Containers-EndUserContainer.c474218e3da23db49451.css">
<link data-chunk="Header" rel="stylesheet" href="https://cdn.readme.io/public/hub/web/Header.9cca5cd8695b199e13b3.css">
<link data-chunk="SuperHubSearch" rel="stylesheet" href="https://cdn.readme.io/public/hub/web/SuperHubSearch.6a1ff81afa1809036d22.css">
<link data-chunk="Reference" rel="stylesheet" href="https://cdn.readme.io/public/hub/web/67852.27956553f699a9f09c01.css">
<link data-chunk="Reference" rel="stylesheet" href="https://cdn.readme.io/public/hub/web/86180.75e3fc491ee8103c63a3.css">
<link data-chunk="Reference" rel="stylesheet" href="https://cdn.readme.io/public/hub/web/Reference.87783c5ace01ef1a1bcb.css">
<link data-chunk="Footer" rel="stylesheet" href="https://cdn.readme.io/public/hub/web/Footer.7ca87f1efe735da787ba.css"><!-- CUSTOM CSS--><style title="rm-custom-css">:root{--project-color-primary:#1a1a1a;--project-color-inverse:#fff;--recipe-button-color:#00ac05;--recipe-button-color-hover:#004602;--recipe-button-color-active:#001301;--recipe-button-color-focus:rgba(0, 172, 5, 0.25);--recipe-button-color-disabled:#79ff7d}[id=enterprise] .ReadMeUI[is=AlgoliaSearch]{--project-color-primary:#1a1a1a;--project-color-inverse:#fff}a{color:var(--color-link-primary,#00ac05)}a:hover{color:var(--color-link-primary-darken-5,#004602)}a.text-muted:hover{color:var(--color-link-primary,#00ac05)}.btn.btn-primary{background-color:#00ac05}.btn.btn-primary:hover{background-color:#004602}.theme-line #hub-landing-top h2{color:#00ac05}#hub-landing-top .btn:hover{color:#00ac05}.theme-line #hub-landing-top .btn:hover{color:#fff}.theme-solid header#hub-header #header-top{background-color:#1a1a1a}.theme-solid.header-gradient header#hub-header #header-top{background:linear-gradient(to bottom,#1a1a1a,#000)}.theme-solid.header-custom header#hub-header #header-top{background-image:url(undefined)}.theme-line header#hub-header #header-top{border-bottom-color:#1a1a1a}.theme-line header#hub-header #header-top .btn{background-color:#1a1a1a}header#hub-header #header-top #header-logo{width:97px;height:40px;margin-top:0;background-image:url(https://files.readme.io/cd37bafe4267ff0f05fc3c180a02661a576232a1488c4364b7338678e49eaf7e-small-svgexport-1.png)}#hub-subheader-parent #hub-subheader .hub-subheader-breadcrumbs .dropdown-menu a:hover{background-color:#1a1a1a}#subheader-links a.active{color:#1a1a1a!important;box-shadow:inset 0 -2px 0 #1a1a1a}#subheader-links a:hover{color:#1a1a1a!important;box-shadow:inset 0 -2px 0 #1a1a1a;opacity:.7}.discussion .submit-vote.submit-vote-parent.voted a.submit-vote-button{background-color:#00ac05}section#hub-discuss .discussion a .discuss-body h4{color:#00ac05}section#hub-discuss .discussion a:hover .discuss-body h4{color:#004602}#hub-subheader-parent #hub-subheader.sticky-header.sticky{border-bottom-color:#00ac05}#hub-subheader-parent #hub-subheader.sticky-header.sticky .search-box{border-bottom-color:#00ac05}#hub-search-results h3 em{color:#00ac05}.main_background,.tag-item{background:#00ac05!important}.main_background:hover{background:#004602!important}.main_color{color:#1a1a1a!important}.border_bottom_main_color{border-bottom:2px solid #1a1a1a}.main_color_hover:hover{color:#1a1a1a!important}section#hub-discuss h1{color:#00ac05}#hub-reference .hub-api .api-definition .api-try-it-out.active{border-color:#00ac05;background-color:#00ac05}#hub-reference .hub-api .api-definition .api-try-it-out.active:hover{background-color:#004602;border-color:#004602}#hub-reference .hub-api .api-definition .api-try-it-out:hover{border-color:#00ac05;color:#00ac05}#hub-reference .hub-reference .logs .logs-empty .logs-login-button,#hub-reference .hub-reference .logs .logs-login .logs-login-button{background-color:var(--project-color-primary,#00ac05);border-color:var(--project-color-primary,#00ac05)}#hub-reference .hub-reference .logs .logs-empty .logs-login-button:hover,#hub-reference .hub-reference .logs .logs-login .logs-login-button:hover{background-color:#004602;border-color:#004602}#hub-reference .hub-reference .logs .logs-empty>svg>path,#hub-reference .hub-reference .logs .logs-login>svg>path{fill:#00ac05;fill:var(--project-color-primary,#00ac05)}#hub-reference .hub-reference .logs:last-child .logs-empty,#hub-reference .hub-reference .logs:last-child .logs-login{margin-bottom:35px}#hub-reference .hub-reference .hub-reference-section .hub-reference-left header .hub-reference-edit:hover{color:#00ac05}.main-color-accent{border-bottom:3px solid #1a1a1a;padding-bottom:8px}</style><meta name="loadedProject" content="mini-nana"><script>var storedColorMode = `light` === 'system' ? window.localStorage.getItem('color-scheme') : `light`
document.querySelector('[data-color-mode]').setAttribute('data-color-mode', storedColorMode)</script><script id="config" type="application/json" data-json="{&quot;algoliaIndex&quot;:&quot;readme_search_v2&quot;,&quot;amplitude&quot;:{&quot;apiKey&quot;:&quot;dc8065a65ef83d6ad23e37aaf014fc84&quot;,&quot;enabled&quot;:true},&quot;asset_url&quot;:&quot;https://cdn.readme.io&quot;,&quot;domain&quot;:&quot;readme.io&quot;,&quot;domainFull&quot;:&quot;https://dash.readme.com&quot;,&quot;encryptedLocalStorageKey&quot;:&quot;ekfls-2025-03-27&quot;,&quot;fullstory&quot;:{&quot;enabled&quot;:true,&quot;orgId&quot;:&quot;FSV9A&quot;},&quot;git&quot;:{&quot;sync&quot;:{&quot;bitbucket&quot;:{&quot;installationLink&quot;:&quot;https://developer.atlassian.com/console/install/310151e6-ca1a-4a44-9af6-1b523fea0561?signature=AYABeMn9vqFkrg%2F1DrJAQxSyVf4AAAADAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6NzA5NTg3ODM1MjQzOmtleS83MDVlZDY3MC1mNTdjLTQxYjUtOWY5Yi1lM2YyZGNjMTQ2ZTcAuAECAQB4IOp8r3eKNYw8z2v%2FEq3%2FfvrZguoGsXpNSaDveR%2FF%2Fo0BHUxIjSWx71zNK2RycuMYSgAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDOJgARbqndU9YM%2FRdQIBEIA7unpCah%2BIu53NA72LkkCDhNHOv%2BgRD7agXAO3jXqw0%2FAcBOB0%2F5LmpzB5f6B1HpkmsAN2i2SbsFL30nkAB2F3cy1rbXMAS2Fybjphd3M6a21zOmV1LXdlc3QtMTo3MDk1ODc4MzUyNDM6a2V5LzQ2MzBjZTZiLTAwYzMtNGRlMi04NzdiLTYyN2UyMDYwZTVjYwC4AQICAHijmwVTMt6Oj3F%2B0%2B0cVrojrS8yZ9ktpdfDxqPMSIkvHAGT%2FMTvCxC3XwnwlulZe975AAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMMUUe9d1YmFOo373TAgEQgDuJo7TayM6NL19Sj9RPooRrl8rYxwKgvu9gkLNc3GuyyovWI1xA2qTr0LQzMRsf3imrAWsywzPcsjnvuAAHYXdzLWttcwBLYXJuOmF3czprbXM6dXMtZWFzdC0xOjcwOTU4NzgzNTI0MzprZXkvNmMxMjBiYTAtNGNkNS00OTg1LWI4MmUtNDBhMDQ5NTJjYzU3ALgBAgIAeLKa7Dfn9BgbXaQmJGrkKztjV4vrreTkqr7wGwhqIYs5AZR28Sibv2eBxSIg2MydtvEAAAB%2BMHwGCSqGSIb3DQEHBqBvMG0CAQAwaAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAzzWhThsIgJwrr%2FY2ECARCAOxoaW9pob21lweyAfrIm6Fw7gd8D%2B%2F8LHk4rl3jjULDM35%2FVPuqBrqKunYZSVCCGNGB3RqpQJr%2FasASiAgAAAAAMAAAQAAAAAAAAAAAAAAAAAEokowLKsF1tMABEq%2BKNyJP%2F%2F%2F%2F%2FAAAAAQAAAAAAAAAAAAAAAQAAADJLzRcp6MkqKR43PUjOiRxxbxXYhLc6vFXEutK3%2BQ71yuPq4dC8pAHruOVQpvVcUSe8dptV8c7wR8BTJjv%2F%2FNe8r0g%3D&amp;product=bitbucket&quot;}}},&quot;metrics&quot;:{&quot;billingCronEnabled&quot;:&quot;true&quot;,&quot;dashUrl&quot;:&quot;https://m.readme.io&quot;,&quot;defaultUrl&quot;:&quot;https://m.readme.io&quot;,&quot;exportMaxRetries&quot;:12,&quot;wsUrl&quot;:&quot;wss://m.readme.io&quot;},&quot;micro&quot;:{&quot;baseUrl&quot;:&quot;https://micro-beta.readme.com&quot;},&quot;proxyUrl&quot;:&quot;https://try.readme.io&quot;,&quot;readmeRecaptchaSiteKey&quot;:&quot;6LesVBYpAAAAAESOCHOyo2kF9SZXPVb54Nwf3i2x&quot;,&quot;releaseVersion&quot;:&quot;5.560.0&quot;,&quot;reservedWords&quot;:{&quot;tools&quot;:[&quot;execute-request&quot;,&quot;get-code-snippet&quot;,&quot;get-endpoint&quot;,&quot;get-request-body&quot;,&quot;get-response-schema&quot;,&quot;get-server-variables&quot;,&quot;list-endpoints&quot;,&quot;list-security-schemes&quot;,&quot;list-specs&quot;,&quot;search-specs&quot;,&quot;search&quot;,&quot;fetch&quot;]},&quot;sentry&quot;:{&quot;dsn&quot;:&quot;https://3bbe57a973254129bcb93e47dc0cc46f@o343074.ingest.sentry.io/2052166&quot;,&quot;enabled&quot;:true},&quot;shMigration&quot;:{&quot;promoVideo&quot;:&quot;&quot;,&quot;forceWaitlist&quot;:false,&quot;migrationPreview&quot;:false},&quot;sslBaseDomain&quot;:&quot;readmessl.com&quot;,&quot;sslGenerationService&quot;:&quot;ssl.readmessl.com&quot;,&quot;stripePk&quot;:&quot;pk_live_5103PML2qXbDukVh7GDAkQoR4NSuLqy8idd5xtdm9407XdPR6o3bo663C1ruEGhXJjpnb2YCpj8EU1UvQYanuCjtr00t1DRCf2a&quot;,&quot;superHub&quot;:{&quot;newProjectsEnabled&quot;:true},&quot;wootric&quot;:{&quot;accountToken&quot;:&quot;NPS-122b75a4&quot;,&quot;enabled&quot;:true}}"></script></head><body class="body-none theme-line header-solid header-bg-size-auto header-bg-pos-tl header-overlay-triangles reference-layout-row lumosity-dark hub-full"><div id="ssr-top"></div><div id="ssr-main"><div class="App ThemeContext ThemeContext_dark ThemeContext_classic ThemeContext_line" style="--color-primary:#1a1a1a;--color-primary-inverse:#fff;--color-primary-alt:#000000;--color-primary-darken-10:#000000;--color-primary-darken-20:#000000;--color-primary-alpha-25:rgba(26, 26, 26, 0.25);--color-link-primary:#00ac05;--color-link-primary-darken-5:#009204;--color-link-primary-darken-10:#007904;--color-link-primary-darken-20:#004602;--color-link-primary-alpha-50:rgba(0, 172, 5, 0.5);--color-link-primary-alpha-25:rgba(0, 172, 5, 0.25);--color-link-background:rgba(0, 172, 5, 0.09);--color-link-text:#fff;--color-login-link:#018ef5;--color-login-link-text:#fff;--color-login-link-darken-10:#0171c2;--color-login-link-primary-alpha-50:rgba(1, 142, 245, 0.5)"><div class="SuperHub2RNxzk6HzHiJ"><div class="ContentWithOwlbotx4PaFDoA1KMz"><div class="ContentWithOwlbot-content2X1XexaN8Lf2"><header class="Header3zzata9F_ZPQ rm-Header_classic Header_collapsible3n0YXfOvb_Al rm-Header Header-links-buttons"><div class="rm-Header-top Header-topuTMpygDG4e1V Header-top_classic3g7Q6zoBy8zh"><div class="rm-Container rm-Container_flex"><div style="outline:none" tabindex="-1"><a href="#content" target="_self" class="Button Button_md rm-JumpTo Header-jumpTo3IWKQXmhSI5D Button_primary">Jump to Content</a></div><div class="rm-Header-left Header-leftADQdGVqx1wqU"><a class="rm-Logo Header-logo1Xy41PtkzbdG" href="/docs" target="_self"><img alt="Nana Mini Apps" class="rm-Logo-img rm-Logo-img_lg Header-logo-img3YvV4lcGKkeb" src="https://files.readme.io/cd37bafe4267ff0f05fc3c180a02661a576232a1488c4364b7338678e49eaf7e-small-svgexport-1.png"/></a><a class="Button Button_md rm-Header-link rm-Header-top-link Button_slate_text Header-link2tXYTgXq85zW" href="/" target="_self">Home</a><a class="Button Button_md rm-Header-link rm-Header-top-link Button_slate_text Header-link2tXYTgXq85zW" href="/docs" target="_self">Guides</a><a aria-current="page" class="Button Button_md rm-Header-link rm-Header-top-link Button_slate_text rm-Header-top-link_active Header-link2tXYTgXq85zW active" href="/reference" target="_self">API Reference</a><a class="Button Button_md rm-Header-link rm-Header-top-link Button_slate_text Header-link2tXYTgXq85zW" href="/changelog" target="_self">Changelog</a></div><div class="rm-Header-left Header-leftADQdGVqx1wqU Header-left_mobile1RG-X93lx6PF"><div><button aria-label="Toggle navigation menu" class="icon-menu menu3d6DYNDa3tk5" type="button"></button><div class=""><div class="Flyout95xhYIIoTKtc undefined rm-Flyout" data-testid="flyout"><div class="MobileFlyout1hHJpUd-nYkd"><a class="rm-MobileFlyout-item NavItem-item1gDDTqaXGhm1 NavItem-item_mobile1qG3gd-Mkck- " href="/docs" target="_self"><i class="icon-guides NavItem-badge1qOxpfTiALoz rm-Header-bottom-link-icon"></i><span class="NavItem-textSlZuuL489uiw">Guides</span></a><a aria-current="page" class="rm-MobileFlyout-item NavItem-item1gDDTqaXGhm1 NavItem-item_mobile1qG3gd-Mkck-  active" href="/reference" target="_self"><i class="icon-references NavItem-badge1qOxpfTiALoz rm-Header-bottom-link-icon"></i><span class="NavItem-textSlZuuL489uiw">API Reference</span></a><a class="rm-MobileFlyout-item NavItem-item1gDDTqaXGhm1 NavItem-item_mobile1qG3gd-Mkck- " href="/changelog" target="_self"><i class="icon-changelog NavItem-badge1qOxpfTiALoz rm-Header-bottom-link-icon"></i><span class="NavItem-textSlZuuL489uiw">Changelog</span></a><hr class="MobileFlyout-divider10xf7R2X1MeW"/><a class="rm-MobileFlyout-item NavItem-item1gDDTqaXGhm1 NavItem-item_mobile1qG3gd-Mkck- NavItem_dropdown-muted1xJVuczwGc74" href="/" target="_self">Home</a><a class="rm-MobileFlyout-item NavItem-item1gDDTqaXGhm1 NavItem-item_mobile1qG3gd-Mkck- NavItem_dropdown-muted1xJVuczwGc74" href="/docs" target="_self">Guides</a><a aria-current="page" class="rm-MobileFlyout-item NavItem-item1gDDTqaXGhm1 NavItem-item_mobile1qG3gd-Mkck- NavItem_dropdown-muted1xJVuczwGc74 active" href="/reference" target="_self">API Reference</a><a class="rm-MobileFlyout-item NavItem-item1gDDTqaXGhm1 NavItem-item_mobile1qG3gd-Mkck- NavItem_dropdown-muted1xJVuczwGc74" href="/changelog" target="_self">Changelog</a><a class="MobileFlyout-logo3Lq1eTlk1K76 Header-logo1Xy41PtkzbdG rm-Logo" href="/docs" target="_self"><img alt="Nana Mini Apps" class="Header-logo-img3YvV4lcGKkeb rm-Logo-img" src="https://files.readme.io/cd37bafe4267ff0f05fc3c180a02661a576232a1488c4364b7338678e49eaf7e-small-svgexport-1.png"/></a></div></div></div></div><div class="Header-left-nav2xWPWMNHOGf_"><i class="icon-references Header-left-nav-icon10glJKFwewOv"></i>API Reference</div></div><div class="rm-Header-right Header-right21PC2XTT6aMg"><span class="Header-right_desktop14ja01RUQ7HE"></span><div class="Header-searchtb6Foi0-D9Vx"><button aria-label="Search ⌘k" class="rm-SearchToggle" data-symbol="⌘"><div class="rm-SearchToggle-icon icon-search1"></div></button></div></div></div></div><div class="Header-bottom2eLKOFXMEmh5 Header-bottom_classic rm-Header-bottom"><div class="rm-Container rm-Container_flex"><nav aria-label="Primary navigation" class="Header-leftADQdGVqx1wqU Header-subnavnVH8URdkgvEl" role="navigation"><a class="Button Button_md rm-Header-link rm-Header-bottom-link Button_slate_text Header-bottom-link_mobile " href="/docs" target="_self"><i class="icon-guides rm-Header-bottom-link-icon"></i><span>Guides</span></a><a aria-current="page" class="Button Button_md rm-Header-link rm-Header-bottom-link Button_slate_text Header-bottom-link_mobile  active" href="/reference" target="_self"><i class="icon-references rm-Header-bottom-link-icon"></i><span>API Reference</span></a><a class="Button Button_md rm-Header-link rm-Header-bottom-link Button_slate_text Header-bottom-link_mobile " href="/changelog" target="_self"><i class="icon-changelog rm-Header-bottom-link-icon"></i><span>Changelog</span></a><div class="Header-subnav-tabyNLkcOA6xAra" style="transform:translateX(0px);width:0"></div></nav><button align="center" justify="between" style="--flex-gap:var(--xs)" class="Button Button_sm Flex Flex_row MobileSubnav1DsTfasXloM2 Button_contrast Button_contrast_outline" type="button"><span class="Button-label">Get User Info</span><span class="IconWrapper Icon-wrapper2z2wVIeGsiUy"><svg fill="none" viewBox="0 0 24 24" class="Icon Icon3_D2ysxFZ_ll Icon-svg2Lm7f6G9Ly5a" data-name="chevron-up-down" role="img" style="--icon-color:inherit;--icon-size:inherit;--icon-stroke-width:2px"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6 16 6 6 6-6M18 8l-6-6-6 6" class="icon-stroke-width"></path></svg></span></button><div class="rm-Header-search Header-searchtb6Foi0-D9Vx Header-search_classic rm-Header-search_feather Header-search_featherYsmQBn55F3d9"><button aria-label="Search k" class="rm-SearchToggle" data-symbol=""><div class="rm-SearchToggle-icon icon-search1"></div><div class="Header-search-placeholder3Vx4OmMPcjAi rm-SearchToggle-placeholder">Search</div><kbd class="KbdShortcut3gsETbU1kkU0 rm-SearchToggle-shortcut"></kbd></button></div></div></div><div class="hub-search-results--reactApp " id="hub-search-results"><div class="hub-container"><div class="modal-backdrop show-modal rm-SearchModal" role="button" tabindex="0"><div aria-label="Search Dialog" class="SuperHubSearchI_obvfvvQi4g" id="AppSearch" role="tabpanel" tabindex="0"><div data-focus-guard="true" tabindex="-1" style="width:1px;height:0px;padding:0;overflow:hidden;position:fixed;top:1px;left:1px"></div><div data-focus-lock-disabled="disabled" class="SuperHubSearch-container2BhYey2XE-Ij"><div class="SuperHubSearch-col1km8vLFgOaYj"><div class="SearchBoxnZBxftziZGcz"><input aria-label="Search" autoCapitalize="off" autoComplete="off" autoCorrect="off" spellcheck="false" tabindex="0" aria-required="false" class="Input Input_md SearchBox-inputR4jffU8l10iF" type="search" value=""/></div><div class="SearchTabs3rNhUK3HjrRJ"><div class="Tabs Tabs-list" role="tablist"><div aria-label="All" aria-selected="true" class="SearchTabs-tab1TrpmhQv840T Tabs-listItem Tabs-listItem_active" role="tab" tabindex="1"><span class="SearchTabs-tab1TrpmhQv840T"><span class="IconWrapper Icon-wrapper2z2wVIeGsiUy"><svg fill="none" viewBox="0 0 24 24" class="Icon Icon3_D2ysxFZ_ll Icon-svg2Lm7f6G9Ly5a icon" data-name="search" role="img" style="--icon-color:inherit;--icon-size:inherit;--icon-stroke-width:2px"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" class="icon-stroke-width"></path></svg></span>All</span></div><div aria-label="Pages" aria-selected="false" class="SearchTabs-tab1TrpmhQv840T Tabs-listItem" role="tab" tabindex="1"><span class="SearchTabs-tab1TrpmhQv840T"><span class="IconWrapper Icon-wrapper2z2wVIeGsiUy"><svg fill="none" viewBox="0 0 24 24" class="Icon Icon3_D2ysxFZ_ll Icon-svg2Lm7f6G9Ly5a icon" data-name="custom-pages" role="img" style="--icon-color:inherit;--icon-size:inherit;--icon-stroke-width:2px"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7Z" class="icon-stroke-width"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 2v7h7M12 11.333V12M12 18v.667M9.407 12.407l.473.473M14.12 17.12l.473.473M8.333 15H9M15 15h.667M9.407 17.593l.473-.473M14.12 12.88l.473-.473" class="icon-stroke-width"></path></svg></span>Pages</span></div></div></div><div class="rm-SearchModal-empty SearchResults35_kFOb1zvxX SearchResults_emptyiWzyXErtNcQJ"><span class="IconWrapper Icon-wrapper2z2wVIeGsiUy"><svg fill="none" viewBox="0 0 24 24" class="Icon Icon3_D2ysxFZ_ll Icon-svg2Lm7f6G9Ly5a rm-SearchModal-empty-icon icon icon-search" data-name="search" role="img" style="--icon-color:inherit;--icon-size:var(--icon-md);--icon-stroke-width:2px"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" class="icon-stroke-width"></path></svg></span><h6 class="Title Title6 rm-SearchModal-empty-text">Start typing to search…</h6></div></div></div><div data-focus-guard="true" tabindex="-1" style="width:1px;height:0px;padding:0;overflow:hidden;position:fixed;top:1px;left:1px"></div></div></div></div></div></header><main class="SuperHubReference3_1nwDyq5sO3 rm-ReferenceMain rm-ReferenceMain-SuperHub rm-Container rm-Container_flex" id="Explorer"><nav aria-label="Secondary navigation" class="rm-Sidebar hub-sidebar reference-redesign Nav3C5f8FcjkaHj" id="reference-sidebar" role="navigation"><div class="Main-QuickNav-container1OiLvjSDusO6"><button aria-keyshortcuts="Control+/ Meta+/" class="QuickNav1q-OoMjiX_Yr QuickNav-button2KzlQbz5Pm2Y">JUMP TO</button></div><div class="Sidebar1t2G1ZJq-vU1 rm-Sidebar hub-sidebar-content"><section class="Sidebar-listWrapper6Q9_yUrG906C rm-Sidebar-section"><h2 class="Sidebar-headingTRQyOa2pk0gh rm-Sidebar-heading">MiniApps Developer Hub</h2><ul class="Sidebar-list_sidebarLayout3RaX72iQNOEI Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list"><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link" target="_self" href="/reference/get_user_info"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">User</span></span><button aria-expanded="false" aria-label="Show subpages for User" class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button"><i aria-hidden="true" class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW icon-chevron-rightward"></i></button></a><ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list"><li class="Sidebar-item23D-2Kd61_k3"><a aria-current="page" class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link active" target="_self" href="/reference/get_user_info"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Get User Info</span></span></a></li></ul></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link" target="_self" href="/reference/createpaymentsession"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Payments</span></span><button aria-expanded="false" aria-label="Show subpages for Payments" class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button"><i aria-hidden="true" class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW icon-chevron-rightward"></i></button></a><ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list"><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/createpaymentsession"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Create Payment Session</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_post APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-post-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-post-bg-active)">post</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/listpaymentsessionsv2"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">List Payment Sessions</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/getpaymentsession"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Get Payment Session</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/refundrefundpaymentsession"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Refund Payment Session</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li></ul></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link" target="_self" href="/reference/listorderactivities"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Orders</span></span><button aria-expanded="false" aria-label="Show subpages for Orders" class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button"><i aria-hidden="true" class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW icon-chevron-rightward"></i></button></a><ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list"><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/listorderactivities"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Get order activities</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/createorderactivities"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Create a new order activity</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_post APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-post-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-post-bg-active)">post</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/getorderactivities"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Get order activity by ID</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li></ul></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link" target="_self" href="/reference/getavailabletries"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Rewards</span></span><button aria-expanded="false" aria-label="Show subpages for Rewards" class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button"><i aria-hidden="true" class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW icon-chevron-rightward"></i></button></a><ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list"><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/getavailabletries"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Get Available Tries</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/getavailablerewards"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Get Available Rewards</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/getuserrewards"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Get User Rewards</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/loguseractivity"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Log User Activity</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_post APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-post-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-post-bg-active)">post</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/registeruserreward"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Register User Reward</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_post APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-post-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-post-bg-active)">post</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/getrewardshistory"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Get Rewards History</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li></ul></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link" target="_self" href="/reference/createshipment"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Shipments</span></span><button aria-expanded="false" aria-label="Show subpages for Shipments" class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button"><i aria-hidden="true" class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW icon-chevron-rightward"></i></button></a><ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list"><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/createshipment"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Create shipment</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_post APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-post-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-post-bg-active)">post</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/trackshipment"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Track shipment</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/getshipmentdetails"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Get shipment details</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_get APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-get-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-get-bg-active)">get</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/cancelshipment"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Cancel shipment</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_post APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-post-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-post-bg-active)">post</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li></ul></li><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 Sidebar-link_parent text-wrap rm-Sidebar-link" target="_self" href="/reference/sendnotification"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Notifications</span></span><button aria-expanded="false" aria-label="Show subpages for Notifications" class="Sidebar-link-buttonWrapper3hnFHNku8_BJ" type="button"><i aria-hidden="true" class="Sidebar-link-iconnjiqEiZlPn0W Sidebar-link-expandIcon2yVH6SarI6NW icon-chevron-rightward"></i></button></a><ul class="subpages Sidebar-list3cZWQLaBf9k8 rm-Sidebar-list"><li class="Sidebar-item23D-2Kd61_k3"><a class="Sidebar-link2Dsha-r-GKh2 childless subpage text-wrap rm-Sidebar-link" target="_self" href="/reference/sendnotification"><span class="Sidebar-link-textLuTE1ySm4Kqn"><span class="Sidebar-link-text_label1gCT_uPnx7Gu">Send notification</span></span><span class="Sidebar-method-container2yBYD-KB_IfC"><span class="rm-APIMethod APIMethod APIMethod_fixedWidth APIMethod_fixedWidth_md APIMethod_post APIMethod_md Sidebar-methodfUM3m6FEWm6w" data-testid="http-method" style="--APIMethod-bg:var(--APIMethod-post-bg-active);--APIMethod-fg:var(--APIMethod-default-fg-active);--APIMethod-bg-active:var(--APIMethod-post-bg-active)">post</span></span><div class="Sidebar-link-buttonWrapper3hnFHNku8_BJ"></div></a></li></ul></li></ul></section><div class="readme-logo" id="readmeLogo">Powered by<!-- --> <a aria-label="ReadMe" href="https://readme.com?ref_src=hub&amp;project=mini-nana" style="color:unset"><i class="icon icon-readme" style="display:inline-block;min-width:71px"></i></a></div></div><button aria-label="Hide sidebar navigation" class="Nav-toggle-collapse39KxgTH727KL" type="button"></button></nav><div class="SuperHubReference-article-wrapper3MpzTHD_pHxT"><div align="stretch" class="Flex Flex_row SuperHubReference-article-container3-0_Qiq3UBH5" justify="between" style="--flex-gap:0;flex-grow:1"><article class="rm-Article" id="content"><header class="headline-container21aRBSn8Bqg6 headline-container_basic1DFntTggitfX" data-raycast-oas="false"><div class="headline-container-grid-itemGdPV-VbhShYs headline-container-button-containerdoRPmNS7iaB3"><div id="content-head"><h1 class="Title Title1">Get User Info</h1></div><div class="AIDropdownzmvdRdsNayZl headline-container-ai-dropdown1q98-Ie9cpfI rm-AIDropdown" style="display:flex;justify-content:flex-start;width:100%;margin-bottom:1rem;z-index:50"><div class="Dropdown Dropdown_closed" data-testid="dropdown-container"><button aria-haspopup="dialog" class="Button Button_sm Dropdown-toggle Button_secondary Button_secondary_outline" type="button"><svg aria-hidden="true" class="Sparkle2v30M7Hw3dl4" fill="none" height="16" viewBox="0 0 24 24"><path class="Sparkle-sparklelcqeshUKPe_0 Sparkle-sparkle11cIEtq5vfQYN" d="M13.386 0.544156C13.6474 0.544156 13.8381 0.735298 13.8882 1.00658C14.6014 6.51073 15.375 7.34473 20.8191 7.9473C21.1002 7.9773 21.2914 8.18815 21.2914 8.44958C21.2914 8.71101 21.1002 8.91158 20.8191 8.95187C15.375 9.55444 14.6014 10.388 13.8882 15.8926C13.8381 16.1639 13.6474 16.3447 13.386 16.3447C13.1245 16.3447 12.9342 16.1639 12.894 15.8926C12.1808 10.388 11.3974 9.55444 5.9631 8.95187C5.67167 8.91158 5.48096 8.71058 5.48096 8.44958C5.48096 8.18816 5.67167 7.9773 5.9631 7.9473C11.3871 7.23415 12.1405 6.50087 12.894 1.00658C12.9342 0.735298 13.125 0.544156 13.386 0.544156Z"></path><path class="Sparkle-sparklelcqeshUKPe_0 Sparkle-sparkle21gfJNRShkozs" d="M6.91762 11.9649C6.89747 11.7841 6.76676 11.6636 6.57605 11.6636C6.39519 11.6636 6.26447 11.7841 6.24433 11.9851C5.91305 14.6671 5.79262 14.7374 3.06005 15.1792C2.83933 15.2092 2.70862 15.3198 2.70862 15.5208C2.70862 15.7016 2.83933 15.8221 3.02019 15.8624C5.77247 16.3745 5.91305 16.3646 6.24433 19.0565C6.26447 19.2472 6.39519 19.3779 6.57605 19.3779C6.76676 19.3779 6.89748 19.2472 6.91762 19.0664C7.26905 16.3342 7.36933 16.2438 10.1418 15.8624C10.3226 15.8319 10.4533 15.7016 10.4533 15.5208C10.4533 15.3301 10.3226 15.2092 10.1418 15.1792L10.0872 15.1687C7.36813 14.6468 7.27652 14.6292 6.91762 11.9649Z"></path><path class="Sparkle-sparklelcqeshUKPe_0 Sparkle-sparkle32dBi_09wSJXH" d="M11.6486 18.7555C11.6182 18.6449 11.5577 18.5746 11.4377 18.5746C11.3173 18.5746 11.2564 18.6449 11.2264 18.7555C10.9153 20.4329 10.9354 20.4531 9.1873 20.8045C9.07715 20.8246 8.99658 20.8949 8.99658 21.0153C8.99658 21.1362 9.07715 21.2065 9.18772 21.2262C10.935 21.5781 10.875 21.6179 11.2264 23.2756C11.2569 23.3858 11.3173 23.4561 11.4377 23.4561C11.5582 23.4561 11.6186 23.3858 11.6486 23.2756C12 21.6179 11.9499 21.5776 13.6873 21.2262C13.8082 21.2061 13.8784 21.1358 13.8784 21.0153C13.8784 20.8945 13.8077 20.8246 13.6877 20.8045C11.94 20.4732 11.9597 20.4329 11.6486 18.7555Z"></path><linearGradient id="sparkle-gradient" x1="0%" x2="50%" y1="0%" y2="0%"><stop offset="0%"></stop><stop offset="100%"></stop></linearGradient></svg><span>Ask AI</span><span class="IconWrapper Icon-wrapper2z2wVIeGsiUy"><svg fill="none" viewBox="0 0 24 24" class="Icon Icon3_D2ysxFZ_ll Icon-svg2Lm7f6G9Ly5a" data-name="chevron-down" role="img" style="--icon-color:inherit;--icon-size:inherit;--icon-stroke-width:2px" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" class="icon-stroke-width"></path></svg></span></button></div></div></div></header></article></div></div><div class="ModalWrapper" id="response-headers-modal-root"></div><div class="ModalWrapper QuickNav-modal QuickNav-modal-desktop" id="QuickNav-modal-root"></div><div class="ModalWrapper QuickNav-modal QuickNav-modal-mobile" id="QuickNav-mobile-modal-root"></div></main><footer aria-label="Status banner" class="Footer2U8XAPoGhlgO AppFooter rm-Banners"></footer><div class="ModalWrapper" id="ChatGPT-modal"></div></div></div></div><div class="ModalWrapper" id="tutorialmodal-root"></div></div></div><div class="ng-non-bindable"><script id="ssr-props" data-initial-props="{&quot;sidebars&quot;:{},&quot;apiBaseUrl&quot;:&quot;/&quot;,&quot;baseUrl&quot;:&quot;/&quot;,&quot;search&quot;:{&quot;appId&quot;:&quot;T28YKFATPY&quot;,&quot;searchApiKey&quot;:&quot;NTg0ZDQwY2EwNDYzOGQ3NjQyYWI4YzQxNTNkMmY3NzVjNTAzOWEyOWRmYmMyZjE5NWZlNTAyMDJjMjY3MjY2M3RhZ0ZpbHRlcnM9KHByb2plY3Q6NjZlZmRjZTI1NWMwMjlkOTdmYzM0YTBmKSwodmVyc2lvbjpub25lLHZlcnNpb246NjZlZmRjZTI1NWMwMjlkOTdmYzM0YTE1KSwoaGlkZGVuOm5vbmUsaGlkZGVuOmZhbHNlKSwoaW5kZXg6Q3VzdG9tUGFnZSxpbmRleDpQYWdlLGluZGV4OkJsb2cp&quot;,&quot;indexName&quot;:&quot;readme_search_v2&quot;,&quot;projectsMeta&quot;:[{&quot;modules&quot;:{&quot;landing&quot;:false,&quot;docs&quot;:true,&quot;examples&quot;:true,&quot;reference&quot;:true,&quot;graphql&quot;:false,&quot;changelog&quot;:true,&quot;discuss&quot;:false,&quot;suggested_edits&quot;:false,&quot;custompages&quot;:false,&quot;tutorials&quot;:false},&quot;id&quot;:&quot;66efdce255c029d97fc34a0f&quot;,&quot;name&quot;:&quot;Nana Mini Apps&quot;,&quot;subdomain&quot;:&quot;mini-nana&quot;,&quot;subpath&quot;:&quot;&quot;,&quot;nav_names&quot;:{&quot;docs&quot;:&quot;&quot;,&quot;reference&quot;:&quot;&quot;,&quot;changelog&quot;:&quot;&quot;,&quot;discuss&quot;:&quot;&quot;,&quot;recipes&quot;:&quot;&quot;,&quot;tutorials&quot;:&quot;&quot;}}],&quot;UrlManager&quot;:{&quot;options&quot;:{&quot;child&quot;:false,&quot;parent&quot;:null,&quot;hasOneChild&quot;:false,&quot;project&quot;:null,&quot;version&quot;:null,&quot;lang&quot;:&quot;en&quot;},&quot;defaults&quot;:{&quot;lang&quot;:&quot;en&quot;}},&quot;urlManagerOpts&quot;:{&quot;lang&quot;:&quot;en&quot;,&quot;parent&quot;:{&quot;childrenProjects&quot;:[]},&quot;project&quot;:{&quot;subdomain&quot;:&quot;mini-nana&quot;},&quot;version&quot;:&quot;1.0&quot;}},&quot;apiDefinitions&quot;:[{&quot;created_at&quot;:&quot;2025-10-08T13:56:43.117Z&quot;,&quot;filename&quot;:&quot;mini.yaml&quot;,&quot;legacy_id&quot;:null,&quot;source&quot;:{&quot;current&quot;:&quot;form&quot;,&quot;original&quot;:&quot;form&quot;,&quot;sync_url&quot;:null},&quot;type&quot;:&quot;openapi&quot;,&quot;updated_at&quot;:&quot;2025-12-24T08:42:24.697Z&quot;,&quot;upload&quot;:{&quot;status&quot;:&quot;done&quot;,&quot;reason&quot;:null,&quot;warnings&quot;:null},&quot;uri&quot;:&quot;/branches/1.0/apis/mini.yaml&quot;}],&quot;customBlocks&quot;:[],&quot;document&quot;:{&quot;allow_crawlers&quot;:&quot;enabled&quot;,&quot;appearance&quot;:{&quot;icon&quot;:{&quot;name&quot;:null,&quot;type&quot;:null}},&quot;category&quot;:{&quot;uri&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;},&quot;content&quot;:{&quot;body&quot;:null,&quot;excerpt&quot;:null,&quot;link&quot;:{&quot;url&quot;:null,&quot;new_tab&quot;:false},&quot;next&quot;:{&quot;description&quot;:null,&quot;pages&quot;:[]}},&quot;metadata&quot;:{&quot;description&quot;:null,&quot;image&quot;:{&quot;uri&quot;:null,&quot;url&quot;:null},&quot;keywords&quot;:null,&quot;title&quot;:null},&quot;parent&quot;:{&quot;uri&quot;:&quot;/branches/1.0/reference/user&quot;},&quot;privacy&quot;:{&quot;view&quot;:&quot;public&quot;},&quot;slug&quot;:&quot;get_user_info&quot;,&quot;state&quot;:&quot;current&quot;,&quot;title&quot;:&quot;Get User Info&quot;,&quot;type&quot;:&quot;basic&quot;,&quot;api_config&quot;:null,&quot;api&quot;:{&quot;method&quot;:&quot;get&quot;,&quot;path&quot;:&quot;&quot;,&quot;schema&quot;:null,&quot;stats&quot;:{&quot;additional_properties&quot;:true,&quot;callbacks&quot;:true,&quot;circular_references&quot;:true,&quot;common_parameters&quot;:true,&quot;discriminators&quot;:true,&quot;links&quot;:true,&quot;polymorphism&quot;:true,&quot;references&quot;:true,&quot;server_variables&quot;:true,&quot;style&quot;:true,&quot;webhooks&quot;:true,&quot;xml_requests&quot;:true,&quot;xml_responses&quot;:true,&quot;xml_schemas&quot;:true},&quot;source&quot;:null,&quot;uri&quot;:null,&quot;validation&quot;:{&quot;status&quot;:&quot;invalid&quot;,&quot;reason&quot;:&quot;Unable to locate the API definition for this file.&quot;}},&quot;connections&quot;:{&quot;recipes&quot;:[]},&quot;href&quot;:{&quot;dash&quot;:&quot;https://dash.readme.com/project/mini-nana/v1.0/refs/get_user_info&quot;,&quot;hub&quot;:&quot;https://docs.apps.nana.sa/reference/get_user_info&quot;,&quot;github_url&quot;:null},&quot;links&quot;:{&quot;project&quot;:&quot;/projects/me&quot;},&quot;project&quot;:{&quot;name&quot;:&quot;Nana Mini Apps&quot;,&quot;subdomain&quot;:&quot;mini-nana&quot;,&quot;uri&quot;:&quot;/projects/me&quot;},&quot;renderable&quot;:{&quot;status&quot;:true},&quot;updated_at&quot;:&quot;2025-12-01T12:10:56.682Z&quot;,&quot;uri&quot;:&quot;/branches/1.0/reference/get_user_info&quot;},&quot;meta&quot;:{&quot;baseUrl&quot;:&quot;/&quot;,&quot;description&quot;:&quot;Nana Mini Apps is a powerful platform designed for small/medium businesses, offering a seamless and customizable solution to create mini apps within the Nana ecosystem. \n\nNana Mini Apps allow your business to offer your services to Nana's customers and open a new revenue path for your business to grow.&quot;,&quot;hidden&quot;:false,&quot;image&quot;:[],&quot;metaTitle&quot;:&quot;Get User Info&quot;,&quot;robots&quot;:&quot;index&quot;,&quot;slug&quot;:&quot;get_user_info&quot;,&quot;title&quot;:&quot;Get User Info&quot;,&quot;type&quot;:&quot;reference&quot;},&quot;oauth&quot;:false,&quot;rdmd&quot;:{&quot;baseUrl&quot;:&quot;/&quot;,&quot;body&quot;:&quot;&quot;,&quot;dehydrated&quot;:{&quot;toc&quot;:&quot;&quot;,&quot;body&quot;:&quot;&quot;},&quot;mdx&quot;:true,&quot;opts&quot;:{&quot;alwaysThrow&quot;:false,&quot;compatibilityMode&quot;:false,&quot;copyButtons&quot;:true,&quot;correctnewlines&quot;:false,&quot;markdownOptions&quot;:{&quot;fences&quot;:true,&quot;commonmark&quot;:true,&quot;gfm&quot;:true,&quot;ruleSpaces&quot;:false,&quot;listItemIndent&quot;:&quot;1&quot;,&quot;spacedTable&quot;:true,&quot;paddedTable&quot;:true},&quot;lazyImages&quot;:true,&quot;normalize&quot;:true,&quot;safeMode&quot;:false,&quot;settings&quot;:{&quot;position&quot;:false},&quot;theme&quot;:&quot;light&quot;,&quot;opts&quot;:{&quot;customBlocks&quot;:{},&quot;resourceID&quot;:&quot;/branches/1.0/reference/get_user_info&quot;,&quot;resourceType&quot;:&quot;page&quot;},&quot;components&quot;:{},&quot;baseUrl&quot;:&quot;/&quot;,&quot;terms&quot;:[{&quot;_id&quot;:&quot;67ffa0de2f320d005508125e&quot;,&quot;term&quot;:&quot;parliament&quot;,&quot;definition&quot;:&quot;Owls are generally solitary, but when seen together the group is called a 'parliament'!&quot;}],&quot;variables&quot;:{&quot;user&quot;:{},&quot;defaults&quot;:[{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d0055081261&quot;,&quot;name&quot;:&quot;MiniAppAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;},{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d0055081260&quot;,&quot;name&quot;:&quot;MobileUserAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;},{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d005508125f&quot;,&quot;name&quot;:&quot;UserAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;}]}},&quot;terms&quot;:[{&quot;_id&quot;:&quot;67ffa0de2f320d005508125e&quot;,&quot;term&quot;:&quot;parliament&quot;,&quot;definition&quot;:&quot;Owls are generally solitary, but when seen together the group is called a 'parliament'!&quot;}],&quot;variables&quot;:{&quot;user&quot;:{},&quot;defaults&quot;:[{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d0055081261&quot;,&quot;name&quot;:&quot;MiniAppAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;},{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d0055081260&quot;,&quot;name&quot;:&quot;MobileUserAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;},{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d005508125f&quot;,&quot;name&quot;:&quot;UserAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;}]}},&quot;sidebar&quot;:[{&quot;pages&quot;:[{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;user&quot;,&quot;title&quot;:&quot;User&quot;,&quot;type&quot;:&quot;basic&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;pages&quot;:[{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;get_user_info&quot;,&quot;title&quot;:&quot;Get User Info&quot;,&quot;type&quot;:&quot;basic&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/get_user_info&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/user&quot;}],&quot;uri&quot;:&quot;/branches/1.0/reference/user&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:null},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;payment&quot;,&quot;title&quot;:&quot;Payments&quot;,&quot;type&quot;:&quot;basic&quot;,&quot;updatedAt&quot;:&quot;2025-12-01T11:52:26.000Z&quot;,&quot;pages&quot;:[{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;createpaymentsession&quot;,&quot;title&quot;:&quot;Create Payment Session&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-01T11:49:36.000Z&quot;,&quot;api_method&quot;:&quot;post&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/createpaymentsession&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/payment&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;listpaymentsessionsv2&quot;,&quot;title&quot;:&quot;List Payment Sessions&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/listpaymentsessionsv2&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/payment&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;getpaymentsession&quot;,&quot;title&quot;:&quot;Get Payment Session&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/getpaymentsession&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/payment&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;refundrefundpaymentsession&quot;,&quot;title&quot;:&quot;Refund Payment Session&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/refundrefundpaymentsession&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/payment&quot;}],&quot;uri&quot;:&quot;/branches/1.0/reference/payment&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:null},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;activities&quot;,&quot;title&quot;:&quot;Orders&quot;,&quot;type&quot;:&quot;basic&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;pages&quot;:[{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;listorderactivities&quot;,&quot;title&quot;:&quot;Get order activities&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/listorderactivities&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/activities&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;createorderactivities&quot;,&quot;title&quot;:&quot;Create a new order activity&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;post&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/createorderactivities&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/activities&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;getorderactivities&quot;,&quot;title&quot;:&quot;Get order activity by ID&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/getorderactivities&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/activities&quot;}],&quot;uri&quot;:&quot;/branches/1.0/reference/activities&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:null},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;mobile-user-rewards&quot;,&quot;title&quot;:&quot;Rewards&quot;,&quot;type&quot;:&quot;basic&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;pages&quot;:[{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;getavailabletries&quot;,&quot;title&quot;:&quot;Get Available Tries&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/getavailabletries&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/mobile-user-rewards&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;getavailablerewards&quot;,&quot;title&quot;:&quot;Get Available Rewards&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/getavailablerewards&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/mobile-user-rewards&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;getuserrewards&quot;,&quot;title&quot;:&quot;Get User Rewards&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/getuserrewards&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/mobile-user-rewards&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;loguseractivity&quot;,&quot;title&quot;:&quot;Log User Activity&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;post&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/loguseractivity&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/mobile-user-rewards&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;registeruserreward&quot;,&quot;title&quot;:&quot;Register User Reward&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;post&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/registeruserreward&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/mobile-user-rewards&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;getrewardshistory&quot;,&quot;title&quot;:&quot;Get Rewards History&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/getrewardshistory&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/mobile-user-rewards&quot;}],&quot;uri&quot;:&quot;/branches/1.0/reference/mobile-user-rewards&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:null},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;shipments&quot;,&quot;title&quot;:&quot;Shipments&quot;,&quot;type&quot;:&quot;basic&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T08:15:31.000Z&quot;,&quot;pages&quot;:[{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;createshipment&quot;,&quot;title&quot;:&quot;Create shipment&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T08:15:31.000Z&quot;,&quot;api_method&quot;:&quot;post&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/createshipment&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/shipments&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;trackshipment&quot;,&quot;title&quot;:&quot;Track shipment&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T08:25:37.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/trackshipment&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/shipments&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;getshipmentdetails&quot;,&quot;title&quot;:&quot;Get shipment details&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T08:32:23.000Z&quot;,&quot;api_method&quot;:&quot;get&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/getshipmentdetails&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/shipments&quot;},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;cancelshipment&quot;,&quot;title&quot;:&quot;Cancel shipment&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T08:42:24.000Z&quot;,&quot;api_method&quot;:&quot;post&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/cancelshipment&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/shipments&quot;}],&quot;uri&quot;:&quot;/branches/1.0/reference/shipments&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:null},{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;notifications&quot;,&quot;title&quot;:&quot;Notifications&quot;,&quot;type&quot;:&quot;basic&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;pages&quot;:[{&quot;deprecated&quot;:false,&quot;hidden&quot;:false,&quot;isBodyEmpty&quot;:true,&quot;renderable&quot;:{&quot;status&quot;:true},&quot;slug&quot;:&quot;sendnotification&quot;,&quot;title&quot;:&quot;Send notification&quot;,&quot;type&quot;:&quot;endpoint&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T07:56:07.000Z&quot;,&quot;api_method&quot;:&quot;post&quot;,&quot;api_webhook&quot;:false,&quot;api_renderable&quot;:{&quot;status&quot;:true},&quot;pages&quot;:[],&quot;uri&quot;:&quot;/branches/1.0/reference/sendnotification&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:&quot;/branches/1.0/reference/notifications&quot;}],&quot;uri&quot;:&quot;/branches/1.0/reference/notifications&quot;,&quot;category&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;,&quot;parent&quot;:null}],&quot;title&quot;:&quot;MiniApps Developer Hub&quot;,&quot;uri&quot;:&quot;/branches/1.0/categories/reference/MiniApps Developer Hub&quot;}],&quot;aiConfig&quot;:{&quot;enabled&quot;:false,&quot;settings&quot;:{&quot;errors&quot;:null,&quot;styleguide&quot;:null,&quot;warnings&quot;:null}},&quot;branches&quot;:{&quot;total&quot;:0,&quot;data&quot;:[],&quot;type&quot;:&quot;branch&quot;},&quot;config&quot;:{&quot;algoliaIndex&quot;:&quot;readme_search_v2&quot;,&quot;amplitude&quot;:{&quot;apiKey&quot;:&quot;dc8065a65ef83d6ad23e37aaf014fc84&quot;,&quot;enabled&quot;:true},&quot;asset_url&quot;:&quot;https://cdn.readme.io&quot;,&quot;domain&quot;:&quot;readme.io&quot;,&quot;domainFull&quot;:&quot;https://dash.readme.com&quot;,&quot;encryptedLocalStorageKey&quot;:&quot;ekfls-2025-03-27&quot;,&quot;fullstory&quot;:{&quot;enabled&quot;:true,&quot;orgId&quot;:&quot;FSV9A&quot;},&quot;git&quot;:{&quot;sync&quot;:{&quot;bitbucket&quot;:{&quot;installationLink&quot;:&quot;https://developer.atlassian.com/console/install/310151e6-ca1a-4a44-9af6-1b523fea0561?signature=AYABeMn9vqFkrg%2F1DrJAQxSyVf4AAAADAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6NzA5NTg3ODM1MjQzOmtleS83MDVlZDY3MC1mNTdjLTQxYjUtOWY5Yi1lM2YyZGNjMTQ2ZTcAuAECAQB4IOp8r3eKNYw8z2v%2FEq3%2FfvrZguoGsXpNSaDveR%2FF%2Fo0BHUxIjSWx71zNK2RycuMYSgAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDOJgARbqndU9YM%2FRdQIBEIA7unpCah%2BIu53NA72LkkCDhNHOv%2BgRD7agXAO3jXqw0%2FAcBOB0%2F5LmpzB5f6B1HpkmsAN2i2SbsFL30nkAB2F3cy1rbXMAS2Fybjphd3M6a21zOmV1LXdlc3QtMTo3MDk1ODc4MzUyNDM6a2V5LzQ2MzBjZTZiLTAwYzMtNGRlMi04NzdiLTYyN2UyMDYwZTVjYwC4AQICAHijmwVTMt6Oj3F%2B0%2B0cVrojrS8yZ9ktpdfDxqPMSIkvHAGT%2FMTvCxC3XwnwlulZe975AAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMMUUe9d1YmFOo373TAgEQgDuJo7TayM6NL19Sj9RPooRrl8rYxwKgvu9gkLNc3GuyyovWI1xA2qTr0LQzMRsf3imrAWsywzPcsjnvuAAHYXdzLWttcwBLYXJuOmF3czprbXM6dXMtZWFzdC0xOjcwOTU4NzgzNTI0MzprZXkvNmMxMjBiYTAtNGNkNS00OTg1LWI4MmUtNDBhMDQ5NTJjYzU3ALgBAgIAeLKa7Dfn9BgbXaQmJGrkKztjV4vrreTkqr7wGwhqIYs5AZR28Sibv2eBxSIg2MydtvEAAAB%2BMHwGCSqGSIb3DQEHBqBvMG0CAQAwaAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAzzWhThsIgJwrr%2FY2ECARCAOxoaW9pob21lweyAfrIm6Fw7gd8D%2B%2F8LHk4rl3jjULDM35%2FVPuqBrqKunYZSVCCGNGB3RqpQJr%2FasASiAgAAAAAMAAAQAAAAAAAAAAAAAAAAAEokowLKsF1tMABEq%2BKNyJP%2F%2F%2F%2F%2FAAAAAQAAAAAAAAAAAAAAAQAAADJLzRcp6MkqKR43PUjOiRxxbxXYhLc6vFXEutK3%2BQ71yuPq4dC8pAHruOVQpvVcUSe8dptV8c7wR8BTJjv%2F%2FNe8r0g%3D&amp;product=bitbucket&quot;}}},&quot;metrics&quot;:{&quot;billingCronEnabled&quot;:&quot;true&quot;,&quot;dashUrl&quot;:&quot;https://m.readme.io&quot;,&quot;defaultUrl&quot;:&quot;https://m.readme.io&quot;,&quot;exportMaxRetries&quot;:12,&quot;wsUrl&quot;:&quot;wss://m.readme.io&quot;},&quot;micro&quot;:{&quot;baseUrl&quot;:&quot;https://micro-beta.readme.com&quot;},&quot;proxyUrl&quot;:&quot;https://try.readme.io&quot;,&quot;readmeRecaptchaSiteKey&quot;:&quot;6LesVBYpAAAAAESOCHOyo2kF9SZXPVb54Nwf3i2x&quot;,&quot;releaseVersion&quot;:&quot;5.560.0&quot;,&quot;reservedWords&quot;:{&quot;tools&quot;:[&quot;execute-request&quot;,&quot;get-code-snippet&quot;,&quot;get-endpoint&quot;,&quot;get-request-body&quot;,&quot;get-response-schema&quot;,&quot;get-server-variables&quot;,&quot;list-endpoints&quot;,&quot;list-security-schemes&quot;,&quot;list-specs&quot;,&quot;search-specs&quot;,&quot;search&quot;,&quot;fetch&quot;]},&quot;sentry&quot;:{&quot;dsn&quot;:&quot;https://3bbe57a973254129bcb93e47dc0cc46f@o343074.ingest.sentry.io/2052166&quot;,&quot;enabled&quot;:true},&quot;shMigration&quot;:{&quot;promoVideo&quot;:&quot;&quot;,&quot;forceWaitlist&quot;:false,&quot;migrationPreview&quot;:false},&quot;sslBaseDomain&quot;:&quot;readmessl.com&quot;,&quot;sslGenerationService&quot;:&quot;ssl.readmessl.com&quot;,&quot;stripePk&quot;:&quot;pk_live_5103PML2qXbDukVh7GDAkQoR4NSuLqy8idd5xtdm9407XdPR6o3bo663C1ruEGhXJjpnb2YCpj8EU1UvQYanuCjtr00t1DRCf2a&quot;,&quot;superHub&quot;:{&quot;newProjectsEnabled&quot;:true},&quot;wootric&quot;:{&quot;accountToken&quot;:&quot;NPS-122b75a4&quot;,&quot;enabled&quot;:true}},&quot;context&quot;:{&quot;labs&quot;:{},&quot;user&quot;:{&quot;isAuthenticated&quot;:false},&quot;terms&quot;:[{&quot;_id&quot;:&quot;67ffa0de2f320d005508125e&quot;,&quot;term&quot;:&quot;parliament&quot;,&quot;definition&quot;:&quot;Owls are generally solitary, but when seen together the group is called a 'parliament'!&quot;}],&quot;variables&quot;:{&quot;user&quot;:{},&quot;defaults&quot;:[{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d0055081261&quot;,&quot;name&quot;:&quot;MiniAppAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;},{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d0055081260&quot;,&quot;name&quot;:&quot;MobileUserAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;},{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d005508125f&quot;,&quot;name&quot;:&quot;UserAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;}]},&quot;project&quot;:{&quot;_id&quot;:&quot;66efdce255c029d97fc34a0f&quot;,&quot;accessRules&quot;:{&quot;branch_merge&quot;:{&quot;admin&quot;:true,&quot;editor&quot;:false},&quot;branch_approve&quot;:{&quot;admin&quot;:true,&quot;editor&quot;:false}},&quot;ai&quot;:{&quot;chat&quot;:{&quot;knowledge&quot;:{&quot;custom_knowledge&quot;:null,&quot;use_project_knowledge&quot;:false},&quot;models&quot;:[]}},&quot;appearance&quot;:{&quot;changelog&quot;:{&quot;layoutExpanded&quot;:false,&quot;showAuthor&quot;:true,&quot;showExactDate&quot;:true},&quot;rdmd&quot;:{&quot;callouts&quot;:{&quot;useIconFont&quot;:false},&quot;theme&quot;:{&quot;background&quot;:&quot;&quot;,&quot;border&quot;:&quot;&quot;,&quot;markdownEdge&quot;:&quot;&quot;,&quot;markdownFont&quot;:&quot;&quot;,&quot;markdownFontSize&quot;:&quot;&quot;,&quot;markdownLineHeight&quot;:&quot;&quot;,&quot;markdownRadius&quot;:&quot;&quot;,&quot;markdownText&quot;:&quot;&quot;,&quot;markdownTitle&quot;:&quot;&quot;,&quot;markdownTitleFont&quot;:&quot;&quot;,&quot;mdCodeBackground&quot;:&quot;&quot;,&quot;mdCodeFont&quot;:&quot;&quot;,&quot;mdCodeRadius&quot;:&quot;&quot;,&quot;mdCodeTabs&quot;:&quot;&quot;,&quot;mdCodeText&quot;:&quot;&quot;,&quot;tableEdges&quot;:&quot;&quot;,&quot;tableHead&quot;:&quot;&quot;,&quot;tableHeadText&quot;:&quot;&quot;,&quot;tableRow&quot;:&quot;&quot;,&quot;tableStripe&quot;:&quot;&quot;,&quot;tableText&quot;:&quot;&quot;,&quot;text&quot;:&quot;&quot;,&quot;title&quot;:&quot;&quot;}},&quot;main_body&quot;:{&quot;type&quot;:&quot;links&quot;},&quot;colors&quot;:{&quot;highlight&quot;:&quot;&quot;,&quot;main&quot;:&quot;#1a1a1a&quot;,&quot;main_alt&quot;:&quot;&quot;,&quot;header_text&quot;:&quot;&quot;,&quot;body_highlight&quot;:&quot;#00ac05&quot;,&quot;custom_login_link_color&quot;:&quot;&quot;},&quot;typography&quot;:{&quot;headline&quot;:&quot;Open+Sans:400:sans-serif&quot;,&quot;body&quot;:&quot;Open+Sans:400:sans-serif&quot;,&quot;typekit&quot;:false,&quot;tk_key&quot;:&quot;&quot;,&quot;tk_headline&quot;:&quot;&quot;,&quot;tk_body&quot;:&quot;&quot;},&quot;header&quot;:{&quot;style&quot;:&quot;solid&quot;,&quot;img&quot;:[],&quot;img_size&quot;:&quot;auto&quot;,&quot;img_pos&quot;:&quot;tl&quot;,&quot;linkStyle&quot;:&quot;buttons&quot;},&quot;body&quot;:{&quot;style&quot;:&quot;none&quot;},&quot;global_landing_page&quot;:{&quot;html&quot;:&quot;&quot;,&quot;redirect&quot;:&quot;&quot;},&quot;allowApiExplorerJsonEditor&quot;:false,&quot;referenceSimpleMode&quot;:true,&quot;referenceLayout&quot;:&quot;row&quot;,&quot;link_logo_to_url&quot;:false,&quot;theme&quot;:&quot;line&quot;,&quot;colorScheme&quot;:&quot;light&quot;,&quot;overlay&quot;:&quot;triangles&quot;,&quot;landing&quot;:true,&quot;sticky&quot;:false,&quot;hide_logo&quot;:false,&quot;childrenAsPills&quot;:false,&quot;subheaderStyle&quot;:&quot;links&quot;,&quot;splitReferenceDocs&quot;:true,&quot;showMetricsInReference&quot;:true,&quot;logo&quot;:[&quot;https://files.readme.io/cd37bafe4267ff0f05fc3c180a02661a576232a1488c4364b7338678e49eaf7e-small-svgexport-1.png&quot;,&quot;cd37bafe4267ff0f05fc3c180a02661a576232a1488c4364b7338678e49eaf7e-small-svgexport-1.png&quot;,145,60,&quot;#a6f404&quot;,&quot;https://files.readme.io/5bb0b38aa7d0f3a391ca06881932ac16c41972159f1639ca2646e43e7f576b80-svgexport-1.png&quot;,&quot;66f0223d77c1a200164cdbd7&quot;],&quot;loginLogo&quot;:[],&quot;logo_white&quot;:[&quot;https://files.readme.io/0c2ac9a00565f7beeed951020fbdf07501e75f637d819b3fd66dd8bff6d8183c-white-logo.png&quot;,&quot;0c2ac9a00565f7beeed951020fbdf07501e75f637d819b3fd66dd8bff6d8183c-white-logo.png&quot;,145,60,&quot;#ffffff&quot;,&quot;66f02251fb537b0031d41dcc&quot;],&quot;logo_white_use&quot;:false,&quot;logo_large&quot;:true,&quot;favicon&quot;:[&quot;https://files.readme.io/609db62d77a1f0c31f001331080cbbdc76d70795e6f3de1d760b5c0a9abdcd3b-favicon.ico&quot;,&quot;609db62d77a1f0c31f001331080cbbdc76d70795e6f3de1d760b5c0a9abdcd3b-favicon.ico&quot;,48,48,&quot;#000000&quot;,&quot;66efe3051aadffb037b5fde9&quot;],&quot;stylesheet&quot;:&quot;&quot;,&quot;stylesheet_hub2&quot;:&quot;&quot;,&quot;stylesheet_hub3&quot;:&quot;&quot;,&quot;javascript&quot;:&quot;&quot;,&quot;javascript_hub2&quot;:&quot;&quot;,&quot;html_promo&quot;:&quot;&quot;,&quot;html_body&quot;:&quot;&quot;,&quot;html_footer&quot;:&quot;&quot;,&quot;html_head&quot;:&quot;&quot;,&quot;html_footer_meta&quot;:&quot;&quot;,&quot;html_hidelinks&quot;:false,&quot;showVersion&quot;:false,&quot;hideTableOfContents&quot;:true,&quot;nextStepsLabel&quot;:&quot;&quot;,&quot;promos&quot;:[{&quot;extras&quot;:{&quot;type&quot;:&quot;none&quot;,&quot;buttonPrimary&quot;:&quot;get-started&quot;,&quot;buttonSecondary&quot;:&quot;none&quot;},&quot;title&quot;:&quot;&quot;,&quot;text&quot;:&quot;&quot;,&quot;_id&quot;:&quot;66efdce255c029d97fc34a10&quot;}],&quot;ai_dropdown&quot;:&quot;enabled&quot;,&quot;ai_options&quot;:{&quot;chatgpt&quot;:&quot;enabled&quot;,&quot;claude&quot;:&quot;enabled&quot;,&quot;clipboard&quot;:&quot;enabled&quot;,&quot;view_as_markdown&quot;:&quot;enabled&quot;,&quot;copilot&quot;:&quot;disabled&quot;,&quot;perplexity&quot;:&quot;enabled&quot;,&quot;ask_ai&quot;:&quot;disabled&quot;},&quot;showPageIcons&quot;:true,&quot;layout&quot;:{&quot;full_width&quot;:false,&quot;style&quot;:&quot;classic&quot;},&quot;methodBadgeStyle&quot;:&quot;classic&quot;,&quot;showMethodInSidebar&quot;:true,&quot;showBreadcrumbs&quot;:false},&quot;custom_domain&quot;:&quot;docs.apps.nana.sa&quot;,&quot;childrenProjects&quot;:[],&quot;derivedPlan&quot;:&quot;startup2018&quot;,&quot;description&quot;:&quot;Nana Mini Apps is a powerful platform designed for small/medium businesses, offering a seamless and customizable solution to create mini apps within the Nana ecosystem. \n\nNana Mini Apps allow your business to offer your services to Nana's customers and open a new revenue path for your business to grow.&quot;,&quot;isExternalSnippetActive&quot;:false,&quot;error404&quot;:&quot;&quot;,&quot;experiments&quot;:[],&quot;first_page&quot;:&quot;docs&quot;,&quot;flags&quot;:{&quot;allowReusableOTPs&quot;:false,&quot;alwaysShowDocPublishStatus&quot;:false,&quot;allowUnsafeCustomHtmlSuggestionsFromNonAdmins&quot;:false,&quot;allowXFrame&quot;:false,&quot;apiAccessRevoked&quot;:false,&quot;correctnewlines&quot;:false,&quot;customComponents&quot;:true,&quot;dashReact&quot;:false,&quot;developerPortal&quot;:false,&quot;disablePasswordlessLogin&quot;:false,&quot;directGoogleToStableVersion&quot;:false,&quot;disableAnonForum&quot;:false,&quot;disableAutoTranslate&quot;:false,&quot;disableSignups&quot;:false,&quot;enableOidc&quot;:false,&quot;enterprise&quot;:false,&quot;graphql&quot;:false,&quot;mdx&quot;:true,&quot;newEditorDash&quot;:true,&quot;oauth&quot;:false,&quot;passwordlessLogin&quot;:&quot;default&quot;,&quot;owlbotAi&quot;:false,&quot;rdmdCompatibilityMode&quot;:false,&quot;reviewWorkflow&quot;:true,&quot;singleProjectEnterprise&quot;:false,&quot;star&quot;:false,&quot;staging&quot;:false,&quot;superHub&quot;:true,&quot;superHubDevelopment&quot;:false,&quot;translation&quot;:false,&quot;disableDiscussionSpamRecaptchaBypass&quot;:false,&quot;bidiSync&quot;:true,&quot;changelogRssAlwaysPublic&quot;:false,&quot;developerViewUsersData&quot;:false,&quot;superHubMigrationSelfServeFlow&quot;:true,&quot;apiDesigner&quot;:false,&quot;hideEnforceSSO&quot;:false,&quot;localLLM&quot;:false,&quot;superHubManageVersions&quot;:true,&quot;gitSidebar&quot;:true,&quot;superHubGlobalCustomBlocks&quot;:false,&quot;childManagedBidi&quot;:false,&quot;superHubBranches&quot;:false,&quot;externalSdkSnippets&quot;:false,&quot;migrationPreview&quot;:false,&quot;requiresJQuery&quot;:false,&quot;superHubPreview&quot;:false,&quot;superHubBranchReviews&quot;:false,&quot;superHubMergePermissions&quot;:false,&quot;aiDocsAudit&quot;:false,&quot;aiPageLinting&quot;:false,&quot;githubCloudSync&quot;:false,&quot;disableAiChat&quot;:false,&quot;gitTranslations&quot;:false,&quot;superHubBranchMergeRules&quot;:false,&quot;superHubBranchReviewActions&quot;:false,&quot;bidiSyncGitlabSelfServe&quot;:true,&quot;gitlabCloudSync&quot;:false,&quot;superHubPlanManagement&quot;:true,&quot;bidiSyncBitbucketSelfServe&quot;:false,&quot;mdxSanitizeComments&quot;:false,&quot;disableSuperframe&quot;:false,&quot;hideAiFeatures&quot;:false,&quot;mdxish&quot;:false},&quot;fullBaseUrl&quot;:&quot;https://docs.apps.nana.sa/&quot;,&quot;git&quot;:{&quot;migration&quot;:{&quot;createRepository&quot;:{&quot;start&quot;:&quot;2025-02-20T01:22:21.167Z&quot;,&quot;end&quot;:&quot;2025-02-20T01:22:21.693Z&quot;,&quot;status&quot;:&quot;successful&quot;},&quot;transformation&quot;:{&quot;end&quot;:&quot;2025-02-20T01:22:22.439Z&quot;,&quot;start&quot;:&quot;2025-02-20T01:22:21.882Z&quot;,&quot;status&quot;:&quot;successful&quot;},&quot;migratingPages&quot;:{&quot;end&quot;:&quot;2025-02-20T01:22:22.992Z&quot;,&quot;start&quot;:&quot;2025-02-20T01:22:22.475Z&quot;,&quot;status&quot;:&quot;successful&quot;},&quot;enableSuperhub&quot;:{&quot;start&quot;:&quot;2025-02-20T01:22:48.450Z&quot;,&quot;status&quot;:&quot;successful&quot;,&quot;end&quot;:&quot;2025-02-20T01:22:48.451Z&quot;}},&quot;sync&quot;:{&quot;installationRequest&quot;:{},&quot;connections&quot;:[],&quot;providers&quot;:[]},&quot;renamedSlugs&quot;:[]},&quot;gitMigrationStatus&quot;:&quot;migrated&quot;,&quot;glossaryTerms&quot;:[{&quot;_id&quot;:&quot;67ffa0de2f320d005508125e&quot;,&quot;term&quot;:&quot;parliament&quot;,&quot;definition&quot;:&quot;Owls are generally solitary, but when seen together the group is called a 'parliament'!&quot;}],&quot;graphqlSchema&quot;:&quot;&quot;,&quot;gracePeriod&quot;:{&quot;enabled&quot;:false,&quot;endsAt&quot;:null},&quot;shouldGateDash&quot;:false,&quot;healthCheck&quot;:{&quot;provider&quot;:&quot;&quot;,&quot;settings&quot;:{}},&quot;i18n&quot;:{&quot;defaultLanguage&quot;:&quot;en&quot;,&quot;languages&quot;:[&quot;en&quot;],&quot;state&quot;:&quot;enabled&quot;},&quot;intercom_secure_emailonly&quot;:false,&quot;intercom&quot;:&quot;&quot;,&quot;is_active&quot;:true,&quot;integrations&quot;:{&quot;login&quot;:{}},&quot;internal&quot;:&quot;&quot;,&quot;jwtExpirationTime&quot;:0,&quot;landing_bottom&quot;:[{&quot;type&quot;:&quot;html&quot;,&quot;alignment&quot;:&quot;left&quot;,&quot;html&quot;:&quot;&quot;}],&quot;mdxMigrationStatus&quot;:&quot;rdmd&quot;,&quot;metrics&quot;:{&quot;monthlyLimit&quot;:0,&quot;monthlyPurchaseLimit&quot;:0,&quot;thumbsEnabled&quot;:true,&quot;meteredBilling&quot;:{}},&quot;modules&quot;:{&quot;landing&quot;:false,&quot;docs&quot;:true,&quot;examples&quot;:true,&quot;reference&quot;:true,&quot;graphql&quot;:false,&quot;changelog&quot;:true,&quot;discuss&quot;:false,&quot;suggested_edits&quot;:false,&quot;custompages&quot;:false,&quot;tutorials&quot;:false},&quot;name&quot;:&quot;Nana Mini Apps&quot;,&quot;nav_names&quot;:{&quot;docs&quot;:&quot;&quot;,&quot;reference&quot;:&quot;&quot;,&quot;changelog&quot;:&quot;&quot;,&quot;discuss&quot;:&quot;&quot;,&quot;recipes&quot;:&quot;&quot;,&quot;tutorials&quot;:&quot;&quot;},&quot;oauth_url&quot;:&quot;&quot;,&quot;onboardingCompleted&quot;:{&quot;api&quot;:true,&quot;appearance&quot;:true,&quot;documentation&quot;:true,&quot;domain&quot;:true,&quot;jwt&quot;:true,&quot;logs&quot;:false,&quot;metricsSDK&quot;:true},&quot;owlbot&quot;:{&quot;copilot&quot;:{&quot;enabled&quot;:false,&quot;hasBeenUsed&quot;:false,&quot;installedCustomPage&quot;:&quot;&quot;},&quot;customization&quot;:{&quot;tone&quot;:&quot;neutral&quot;,&quot;customTone&quot;:&quot;&quot;,&quot;answerLength&quot;:&quot;long&quot;,&quot;forbiddenWords&quot;:&quot;&quot;,&quot;defaultAnswer&quot;:&quot;&quot;},&quot;enabled&quot;:false,&quot;isPaying&quot;:false,&quot;exampleQuestions&quot;:{&quot;question1&quot;:&quot;&quot;,&quot;question2&quot;:&quot;&quot;,&quot;question3&quot;:&quot;&quot;},&quot;knowledge&quot;:&quot;&quot;,&quot;modelList&quot;:[],&quot;newExperience&quot;:false,&quot;llmOptions&quot;:{&quot;model&quot;:{}}},&quot;owner&quot;:{&quot;id&quot;:&quot;66efdc5e77c1a200164cb40d&quot;,&quot;email&quot;:null,&quot;name&quot;:null},&quot;plan&quot;:&quot;startup2018&quot;,&quot;planOverride&quot;:&quot;&quot;,&quot;planSchedule&quot;:{&quot;stripeScheduleId&quot;:null,&quot;changeDate&quot;:null,&quot;nextPlan&quot;:null},&quot;planStatus&quot;:&quot;active&quot;,&quot;planTrial&quot;:&quot;startup2018&quot;,&quot;readmeScore&quot;:{&quot;components&quot;:{&quot;newDesign&quot;:{&quot;enabled&quot;:true,&quot;points&quot;:25},&quot;reference&quot;:{&quot;enabled&quot;:false,&quot;points&quot;:50},&quot;tryItNow&quot;:{&quot;enabled&quot;:true,&quot;points&quot;:35},&quot;syncingOAS&quot;:{&quot;enabled&quot;:false,&quot;points&quot;:10},&quot;customLogin&quot;:{&quot;enabled&quot;:false,&quot;points&quot;:25},&quot;metrics&quot;:{&quot;enabled&quot;:false,&quot;points&quot;:40},&quot;recipes&quot;:{&quot;enabled&quot;:true,&quot;points&quot;:15},&quot;pageVoting&quot;:{&quot;enabled&quot;:true,&quot;points&quot;:1},&quot;suggestedEdits&quot;:{&quot;enabled&quot;:false,&quot;points&quot;:10},&quot;support&quot;:{&quot;enabled&quot;:false,&quot;points&quot;:5},&quot;htmlLanding&quot;:{&quot;enabled&quot;:false,&quot;points&quot;:5},&quot;guides&quot;:{&quot;enabled&quot;:true,&quot;points&quot;:10},&quot;changelog&quot;:{&quot;enabled&quot;:true,&quot;points&quot;:5},&quot;glossary&quot;:{&quot;enabled&quot;:false,&quot;points&quot;:1},&quot;variables&quot;:{&quot;enabled&quot;:true,&quot;points&quot;:1},&quot;integrations&quot;:{&quot;enabled&quot;:false,&quot;points&quot;:2}},&quot;totalScore&quot;:92},&quot;reCaptchaSiteKey&quot;:&quot;&quot;,&quot;reference&quot;:{&quot;alwaysUseDefaults&quot;:false,&quot;defaultExpandResponseExample&quot;:false,&quot;defaultExpandResponseSchema&quot;:false,&quot;enableOAuthFlows&quot;:false},&quot;seo&quot;:{&quot;overwrite_title_tag&quot;:true},&quot;stable&quot;:{&quot;_id&quot;:&quot;66efdce255c029d97fc34a15&quot;,&quot;version&quot;:&quot;1.0&quot;,&quot;version_clean&quot;:&quot;1.0.0&quot;,&quot;codename&quot;:&quot;&quot;,&quot;is_stable&quot;:true,&quot;is_beta&quot;:false,&quot;is_hidden&quot;:false,&quot;is_deprecated&quot;:false,&quot;categories&quot;:[&quot;66efdce255c029d97fc34a17&quot;,&quot;66efdce255c029d97fc34a17&quot;,&quot;66efdce255c029d97fc34a1a&quot;,&quot;66efe4e8280b60000fa8dc92&quot;,&quot;66f017113c6f7f0012092f44&quot;,&quot;66f0174f25ee3e00319377a1&quot;,&quot;66f017a99cfbc20062ac320b&quot;,&quot;66f01bdf1c7acf001b9eb09c&quot;],&quot;pdfStatus&quot;:&quot;&quot;,&quot;project&quot;:&quot;66efdce255c029d97fc34a0f&quot;,&quot;releaseDate&quot;:&quot;2024-09-22T09:01:22.496Z&quot;,&quot;createdAt&quot;:&quot;2024-09-22T09:01:22.538Z&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T08:42:25.040Z&quot;,&quot;__v&quot;:15,&quot;apiRegistries&quot;:[{&quot;filename&quot;:&quot;mini.yaml&quot;,&quot;uuid&quot;:&quot;6j10fmjjrmsn3&quot;}],&quot;source&quot;:&quot;readme&quot;},&quot;subdomain&quot;:&quot;mini-nana&quot;,&quot;subpath&quot;:&quot;&quot;,&quot;superHubWaitlist&quot;:false,&quot;topnav&quot;:{&quot;left&quot;:[{&quot;type&quot;:&quot;home&quot;,&quot;text&quot;:&quot;Home&quot;},{&quot;type&quot;:&quot;docs&quot;,&quot;text&quot;:&quot;Guides&quot;},{&quot;type&quot;:&quot;reference&quot;,&quot;text&quot;:&quot;API Reference&quot;},{&quot;type&quot;:&quot;changelog&quot;,&quot;text&quot;:&quot;Changelog&quot;}],&quot;right&quot;:[],&quot;bottom&quot;:[],&quot;edited&quot;:false},&quot;trial&quot;:{&quot;trialDeadlineEnabled&quot;:true,&quot;trialEndsAt&quot;:&quot;2024-10-06T09:01:22.418Z&quot;},&quot;translate&quot;:{&quot;provider&quot;:&quot;transifex&quot;,&quot;show_widget&quot;:false,&quot;key_public&quot;:&quot;&quot;,&quot;org_name&quot;:&quot;&quot;,&quot;project_name&quot;:&quot;&quot;,&quot;languages&quot;:[]},&quot;url&quot;:&quot;https://nana.sa&quot;,&quot;versions&quot;:[{&quot;_id&quot;:&quot;66efdce255c029d97fc34a15&quot;,&quot;version&quot;:&quot;1.0&quot;,&quot;version_clean&quot;:&quot;1.0.0&quot;,&quot;codename&quot;:&quot;&quot;,&quot;is_stable&quot;:true,&quot;is_beta&quot;:false,&quot;is_hidden&quot;:false,&quot;is_deprecated&quot;:false,&quot;categories&quot;:[&quot;66efdce255c029d97fc34a17&quot;,&quot;66efdce255c029d97fc34a17&quot;,&quot;66efdce255c029d97fc34a1a&quot;,&quot;66efe4e8280b60000fa8dc92&quot;,&quot;66f017113c6f7f0012092f44&quot;,&quot;66f0174f25ee3e00319377a1&quot;,&quot;66f017a99cfbc20062ac320b&quot;,&quot;66f01bdf1c7acf001b9eb09c&quot;],&quot;pdfStatus&quot;:&quot;&quot;,&quot;project&quot;:&quot;66efdce255c029d97fc34a0f&quot;,&quot;releaseDate&quot;:&quot;2024-09-22T09:01:22.496Z&quot;,&quot;createdAt&quot;:&quot;2024-09-22T09:01:22.538Z&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T08:42:25.040Z&quot;,&quot;__v&quot;:15,&quot;apiRegistries&quot;:[{&quot;filename&quot;:&quot;mini.yaml&quot;,&quot;uuid&quot;:&quot;6j10fmjjrmsn3&quot;}],&quot;source&quot;:&quot;readme&quot;}],&quot;variableDefaults&quot;:[{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d0055081261&quot;,&quot;name&quot;:&quot;MiniAppAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;},{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d0055081260&quot;,&quot;name&quot;:&quot;MobileUserAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;},{&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;_id&quot;:&quot;67ffa0de2f320d005508125f&quot;,&quot;name&quot;:&quot;UserAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;}],&quot;webhookEnabled&quot;:false,&quot;isHubEditable&quot;:true},&quot;projectStore&quot;:{&quot;data&quot;:{&quot;allow_crawlers&quot;:&quot;disabled&quot;,&quot;canonical_url&quot;:null,&quot;default_version&quot;:{&quot;name&quot;:&quot;1.0&quot;},&quot;description&quot;:&quot;Nana Mini Apps is a powerful platform designed for small/medium businesses, offering a seamless and customizable solution to create mini apps within the Nana ecosystem. \n\nNana Mini Apps allow your business to offer your services to Nana's customers and open a new revenue path for your business to grow.&quot;,&quot;git&quot;:{&quot;connection&quot;:{&quot;repository&quot;:null,&quot;organization&quot;:null,&quot;status&quot;:&quot;none&quot;}},&quot;glossary&quot;:[{&quot;_id&quot;:&quot;67ffa0de2f320d005508125e&quot;,&quot;term&quot;:&quot;parliament&quot;,&quot;definition&quot;:&quot;Owls are generally solitary, but when seen together the group is called a 'parliament'!&quot;}],&quot;homepage_url&quot;:&quot;https://nana.sa&quot;,&quot;id&quot;:&quot;66efdce255c029d97fc34a0f&quot;,&quot;name&quot;:&quot;Nana Mini Apps&quot;,&quot;parent&quot;:null,&quot;redirects&quot;:[],&quot;sitemap&quot;:&quot;disabled&quot;,&quot;llms_txt&quot;:&quot;disabled&quot;,&quot;subdomain&quot;:&quot;mini-nana&quot;,&quot;suggested_edits&quot;:&quot;disabled&quot;,&quot;uri&quot;:&quot;/projects/me&quot;,&quot;variable_defaults&quot;:[{&quot;name&quot;:&quot;MiniAppAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;,&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;id&quot;:&quot;67ffa0de2f320d0055081261&quot;},{&quot;name&quot;:&quot;MobileUserAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;,&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;id&quot;:&quot;67ffa0de2f320d0055081260&quot;},{&quot;name&quot;:&quot;UserAuthorizationService&quot;,&quot;scheme&quot;:&quot;bearer&quot;,&quot;source&quot;:&quot;security&quot;,&quot;type&quot;:&quot;http&quot;,&quot;id&quot;:&quot;67ffa0de2f320d005508125f&quot;}],&quot;webhooks&quot;:[],&quot;api_designer&quot;:{&quot;allow_editing&quot;:&quot;enabled&quot;},&quot;custom_login&quot;:{&quot;jwt_expiration_time&quot;:0,&quot;login_url&quot;:null,&quot;logout_url&quot;:null},&quot;features&quot;:{&quot;mdx&quot;:&quot;enabled&quot;},&quot;mcp&quot;:{&quot;custom_tools&quot;:[],&quot;disabled_routes&quot;:[],&quot;disabled_tools&quot;:[]},&quot;onboarding_completed&quot;:{&quot;api&quot;:true,&quot;appearance&quot;:true,&quot;documentation&quot;:true,&quot;domain&quot;:true,&quot;jwt&quot;:true,&quot;logs&quot;:false,&quot;metricsSDK&quot;:true},&quot;pages&quot;:{&quot;not_found&quot;:null,&quot;default_visibility&quot;:&quot;public&quot;},&quot;privacy&quot;:{&quot;openapi&quot;:&quot;admin&quot;,&quot;password&quot;:null,&quot;view&quot;:&quot;public&quot;},&quot;refactored&quot;:{&quot;status&quot;:&quot;enabled&quot;,&quot;migrated&quot;:&quot;successful&quot;},&quot;seo&quot;:{&quot;overwrite_title_tag&quot;:&quot;enabled&quot;},&quot;metrics&quot;:{&quot;monthly_purchase_limit&quot;:0},&quot;feature_rules&quot;:{&quot;merge&quot;:{}},&quot;plan&quot;:{&quot;type&quot;:&quot;startup2018&quot;,&quot;grace_period&quot;:{&quot;enabled&quot;:false,&quot;end_date&quot;:null},&quot;trial&quot;:{&quot;expired&quot;:false,&quot;end_date&quot;:&quot;2024-10-06T09:01:22.418Z&quot;}},&quot;reference&quot;:{&quot;api_sdk_snippets&quot;:&quot;enabled&quot;,&quot;defaults&quot;:&quot;use_only_if_required&quot;,&quot;json_editor&quot;:&quot;disabled&quot;,&quot;method_badge_style&quot;:&quot;classic&quot;,&quot;oauth_flows&quot;:&quot;disabled&quot;,&quot;request_history&quot;:&quot;enabled&quot;,&quot;response_examples&quot;:&quot;collapsed&quot;,&quot;response_schemas&quot;:&quot;collapsed&quot;,&quot;show_method_in_sidebar&quot;:&quot;enabled&quot;,&quot;sdk_snippets&quot;:{&quot;external&quot;:&quot;disabled&quot;}},&quot;ai&quot;:{&quot;owlbot&quot;:{&quot;enabled&quot;:false},&quot;chat&quot;:{&quot;models&quot;:[],&quot;knowledge&quot;:{&quot;custom_knowledge&quot;:null,&quot;use_project_knowledge&quot;:false}}},&quot;health_check&quot;:{&quot;provider&quot;:&quot;none&quot;,&quot;settings&quot;:{&quot;manual&quot;:{&quot;status&quot;:&quot;down&quot;,&quot;url&quot;:null},&quot;statuspage&quot;:{&quot;id&quot;:null}}},&quot;integrations&quot;:{&quot;aws&quot;:{&quot;readme_webhook_login&quot;:{&quot;region&quot;:null,&quot;external_id&quot;:null,&quot;role_arn&quot;:null,&quot;usage_plan_id&quot;:null}},&quot;bing&quot;:{&quot;verify&quot;:null},&quot;google&quot;:{&quot;analytics&quot;:null,&quot;site_verification&quot;:null},&quot;heap&quot;:{&quot;id&quot;:null},&quot;koala&quot;:{&quot;key&quot;:null},&quot;localize&quot;:{&quot;key&quot;:null},&quot;postman&quot;:{&quot;key&quot;:null,&quot;client_id&quot;:null,&quot;client_secret&quot;:null,&quot;is_connected&quot;:false},&quot;recaptcha&quot;:{&quot;site_key&quot;:null,&quot;secret_key&quot;:null},&quot;segment&quot;:{&quot;key&quot;:null,&quot;domain&quot;:null},&quot;speakeasy&quot;:{&quot;key&quot;:null,&quot;spec_url&quot;:null},&quot;stainless&quot;:{&quot;key&quot;:null,&quot;name&quot;:null},&quot;typekit&quot;:{&quot;key&quot;:null},&quot;zendesk&quot;:{&quot;subdomain&quot;:null},&quot;intercom&quot;:{&quot;app_id&quot;:null,&quot;secure_mode&quot;:{&quot;key&quot;:null,&quot;email_only&quot;:false}}},&quot;permissions&quot;:{&quot;appearance&quot;:{&quot;private_label&quot;:&quot;disabled&quot;,&quot;custom_code&quot;:{&quot;css&quot;:&quot;disabled&quot;,&quot;html&quot;:&quot;disabled&quot;,&quot;js&quot;:&quot;disabled&quot;}},&quot;branches&quot;:{&quot;merge&quot;:{&quot;admin&quot;:true,&quot;editor&quot;:false},&quot;approve&quot;:{&quot;admin&quot;:true,&quot;editor&quot;:false}}},&quot;appearance&quot;:{&quot;brand&quot;:{&quot;primary_color&quot;:&quot;#1a1a1a&quot;,&quot;link_color&quot;:&quot;#00ac05&quot;,&quot;theme&quot;:&quot;light&quot;},&quot;changelog&quot;:{&quot;layout&quot;:&quot;collapsed&quot;,&quot;show_author&quot;:true,&quot;show_exact_date&quot;:true},&quot;layout&quot;:{&quot;full_width&quot;:&quot;disabled&quot;,&quot;style&quot;:&quot;classic&quot;},&quot;markdown&quot;:{&quot;callouts&quot;:{&quot;icon_font&quot;:&quot;emojis&quot;}},&quot;table_of_contents&quot;:&quot;disabled&quot;,&quot;whats_next_label&quot;:null,&quot;footer&quot;:{&quot;readme_logo&quot;:&quot;show&quot;},&quot;logo&quot;:{&quot;size&quot;:&quot;large&quot;,&quot;dark_mode&quot;:{&quot;uri&quot;:null,&quot;url&quot;:&quot;https://files.readme.io/0c2ac9a00565f7beeed951020fbdf07501e75f637d819b3fd66dd8bff6d8183c-white-logo.png&quot;,&quot;name&quot;:&quot;0c2ac9a00565f7beeed951020fbdf07501e75f637d819b3fd66dd8bff6d8183c-white-logo.png&quot;,&quot;width&quot;:145,&quot;height&quot;:60,&quot;color&quot;:&quot;#ffffff&quot;,&quot;links&quot;:{&quot;original_url&quot;:null}},&quot;main&quot;:{&quot;uri&quot;:&quot;/images/66f0223d77c1a200164cdbd7&quot;,&quot;url&quot;:&quot;https://files.readme.io/cd37bafe4267ff0f05fc3c180a02661a576232a1488c4364b7338678e49eaf7e-small-svgexport-1.png&quot;,&quot;name&quot;:&quot;cd37bafe4267ff0f05fc3c180a02661a576232a1488c4364b7338678e49eaf7e-small-svgexport-1.png&quot;,&quot;width&quot;:145,&quot;height&quot;:60,&quot;color&quot;:&quot;#a6f404&quot;,&quot;links&quot;:{&quot;original_url&quot;:&quot;https://files.readme.io/5bb0b38aa7d0f3a391ca06881932ac16c41972159f1639ca2646e43e7f576b80-svgexport-1.png&quot;}},&quot;favicon&quot;:{&quot;uri&quot;:null,&quot;url&quot;:&quot;https://files.readme.io/609db62d77a1f0c31f001331080cbbdc76d70795e6f3de1d760b5c0a9abdcd3b-favicon.ico&quot;,&quot;name&quot;:&quot;609db62d77a1f0c31f001331080cbbdc76d70795e6f3de1d760b5c0a9abdcd3b-favicon.ico&quot;,&quot;width&quot;:48,&quot;height&quot;:48,&quot;color&quot;:&quot;#000000&quot;,&quot;links&quot;:{&quot;original_url&quot;:null}}},&quot;custom_code&quot;:{&quot;css&quot;:null,&quot;js&quot;:null,&quot;html&quot;:{&quot;header&quot;:null,&quot;home_footer&quot;:null,&quot;page_footer&quot;:null}},&quot;header&quot;:{&quot;type&quot;:&quot;line&quot;,&quot;gradient_color&quot;:null,&quot;link_style&quot;:&quot;buttons&quot;,&quot;overlay&quot;:{&quot;fill&quot;:&quot;auto&quot;,&quot;type&quot;:&quot;triangles&quot;,&quot;position&quot;:&quot;top-left&quot;,&quot;image&quot;:{&quot;uri&quot;:null,&quot;url&quot;:null,&quot;name&quot;:null,&quot;width&quot;:null,&quot;height&quot;:null,&quot;color&quot;:null,&quot;links&quot;:{&quot;original_url&quot;:null}}}},&quot;ai&quot;:{&quot;dropdown&quot;:&quot;enabled&quot;,&quot;options&quot;:{&quot;chatgpt&quot;:&quot;enabled&quot;,&quot;claude&quot;:&quot;enabled&quot;,&quot;clipboard&quot;:&quot;enabled&quot;,&quot;view_as_markdown&quot;:&quot;enabled&quot;,&quot;ask_ai&quot;:&quot;disabled&quot;}},&quot;navigation&quot;:{&quot;breadcrumbs&quot;:&quot;disabled&quot;,&quot;first_page&quot;:&quot;documentation&quot;,&quot;left&quot;:[{&quot;type&quot;:&quot;home&quot;,&quot;title&quot;:null,&quot;url&quot;:null,&quot;custom_page&quot;:null},{&quot;type&quot;:&quot;guides&quot;,&quot;title&quot;:null,&quot;url&quot;:null,&quot;custom_page&quot;:null},{&quot;type&quot;:&quot;reference&quot;,&quot;title&quot;:null,&quot;url&quot;:null,&quot;custom_page&quot;:null},{&quot;type&quot;:&quot;changelog&quot;,&quot;title&quot;:null,&quot;url&quot;:null,&quot;custom_page&quot;:null}],&quot;logo_link&quot;:&quot;landing_page&quot;,&quot;page_icons&quot;:&quot;enabled&quot;,&quot;right&quot;:[],&quot;sub_nav&quot;:[],&quot;subheader_layout&quot;:&quot;links&quot;,&quot;version&quot;:&quot;disabled&quot;,&quot;links&quot;:{&quot;home&quot;:{&quot;label&quot;:&quot;Home&quot;,&quot;visibility&quot;:&quot;disabled&quot;},&quot;graphql&quot;:{&quot;label&quot;:&quot;GraphQL&quot;,&quot;visibility&quot;:&quot;disabled&quot;},&quot;guides&quot;:{&quot;label&quot;:&quot;Guides&quot;,&quot;alias&quot;:null,&quot;visibility&quot;:&quot;enabled&quot;},&quot;reference&quot;:{&quot;label&quot;:&quot;API Reference&quot;,&quot;alias&quot;:null,&quot;visibility&quot;:&quot;enabled&quot;},&quot;recipes&quot;:{&quot;label&quot;:&quot;Recipes&quot;,&quot;alias&quot;:null,&quot;visibility&quot;:&quot;disabled&quot;},&quot;changelog&quot;:{&quot;label&quot;:&quot;Changelog&quot;,&quot;alias&quot;:null,&quot;visibility&quot;:&quot;enabled&quot;},&quot;discussions&quot;:{&quot;label&quot;:&quot;Discussions&quot;,&quot;alias&quot;:null,&quot;visibility&quot;:&quot;disabled&quot;}}}},&quot;i18n&quot;:{&quot;languages&quot;:[&quot;en&quot;],&quot;defaultLanguage&quot;:&quot;en&quot;,&quot;state&quot;:&quot;disabled&quot;}}},&quot;version&quot;:{&quot;_id&quot;:&quot;66efdce255c029d97fc34a15&quot;,&quot;version&quot;:&quot;1.0&quot;,&quot;version_clean&quot;:&quot;1.0.0&quot;,&quot;codename&quot;:&quot;&quot;,&quot;is_stable&quot;:true,&quot;is_beta&quot;:false,&quot;is_hidden&quot;:false,&quot;is_deprecated&quot;:false,&quot;categories&quot;:[&quot;66efdce255c029d97fc34a17&quot;,&quot;66efdce255c029d97fc34a17&quot;,&quot;66efdce255c029d97fc34a1a&quot;,&quot;66efe4e8280b60000fa8dc92&quot;,&quot;66f017113c6f7f0012092f44&quot;,&quot;66f0174f25ee3e00319377a1&quot;,&quot;66f017a99cfbc20062ac320b&quot;,&quot;66f01bdf1c7acf001b9eb09c&quot;],&quot;pdfStatus&quot;:&quot;&quot;,&quot;project&quot;:&quot;66efdce255c029d97fc34a0f&quot;,&quot;releaseDate&quot;:&quot;2024-09-22T09:01:22.496Z&quot;,&quot;createdAt&quot;:&quot;2024-09-22T09:01:22.538Z&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T08:42:25.040Z&quot;,&quot;__v&quot;:15,&quot;apiRegistries&quot;:[{&quot;filename&quot;:&quot;mini.yaml&quot;,&quot;uuid&quot;:&quot;6j10fmjjrmsn3&quot;}],&quot;source&quot;:&quot;readme&quot;}},&quot;i18n&quot;:{&quot;language&quot;:&quot;en&quot;,&quot;translations&quot;:{&quot;en&quot;:{&quot;common&quot;:{&quot;ai&quot;:{&quot;aiOpenFailed&quot;:&quot;Failed to open SuperHub AI panel.&quot;,&quot;askAi&quot;:&quot;Ask AI&quot;,&quot;askAiAriaLabel&quot;:&quot;Open Ask AI Assistant&quot;,&quot;mdCopy&quot;:&quot;Copy Markdown&quot;,&quot;mdOpenFailed&quot;:&quot;Failed to open as markdown&quot;,&quot;mdView&quot;:&quot;View as Markdown&quot;,&quot;noMdToCopy&quot;:&quot;No markdown content available to copy.&quot;,&quot;openFailed&quot;:&quot;Failed to open {{option}}.&quot;},&quot;apiConfig&quot;:{&quot;allRequests&quot;:&quot;All Requests&quot;,&quot;allRequestsFilter&quot;:&quot;All Requests&quot;,&quot;apiKeysNotFound&quot;:&quot;No API keys found.&quot;,&quot;apiKeysNotSynced&quot;:&quot;API keys are not synced with this developer hub.&quot;,&quot;apiRequests&quot;:&quot;API Requests&quot;,&quot;authentication&quot;:&quot;Authentication&quot;,&quot;credentials&quot;:&quot;Credentials&quot;,&quot;dayFilter&quot;:&quot;Last 24 Hours&quot;,&quot;emptyStatePrompt&quot;:&quot;Make a request to see them here or &lt;a&gt;Try It&lt;/a&gt;!&quot;,&quot;error&quot;:&quot;Error&quot;,&quot;errorRequestsFilter&quot;:&quot;400 &amp; 500&quot;,&quot;gettingStarted&quot;:&quot;Getting Started&quot;,&quot;logInPrompt&quot;:&quot;Log in to see your API keys&quot;,&quot;monthFilter&quot;:&quot;Last 30 Days&quot;,&quot;moreErrors&quot;:&quot;More Errors&quot;,&quot;moreRequests&quot;:&quot;More Requests&quot;,&quot;myRecentErrors&quot;:&quot;My Recent Errors&quot;,&quot;myRecentRequests&quot;:&quot;My Recent Requests&quot;,&quot;myRequests&quot;:&quot;My Requests&quot;,&quot;myTopEndpoints&quot;:&quot;My Top Endpoints&quot;,&quot;personalizedDocsSetup&quot;:&quot;Set up &lt;Button&gt;Personalized Docs&lt;/Button&gt; to show users their API keys.&quot;,&quot;pickALanguage&quot;:&quot;Pick a language&quot;,&quot;popularEndpoints&quot;:&quot;Popular Endpoints&quot;,&quot;success&quot;:&quot;Success&quot;,&quot;weekFilter&quot;:&quot;Past week&quot;,&quot;yourApiKeys&quot;:&quot;Your API Keys&quot;},&quot;attribution&quot;:&quot;by {{attribution}}&quot;,&quot;auth&quot;:{&quot;any&quot;:&quot;any&quot;,&quot;apiKey&quot;:&quot;API Key&quot;,&quot;apiKeyPrompt&quot;:&quot;Get API Key&quot;,&quot;apiKeyShow&quot;:&quot;Show API Key&quot;,&quot;apiKeyHide&quot;:&quot;Hide API Key&quot;,&quot;apiKeyToggle&quot;:&quot;Toggle API Key&quot;,&quot;apiInfo&quot;:&quot;API Info&quot;,&quot;authenticate&quot;:&quot;Authenticate&quot;,&quot;authorize&quot;:&quot;Authorize&quot;,&quot;authorizationUrl&quot;:&quot;Authorization URL&quot;,&quot;authorizedScopes&quot;:&quot;Authorized scopes for this token&quot;,&quot;authorizedScopesEmpty&quot;:&quot;Token has no authorized scopes&quot;,&quot;bearer&quot;:&quot;Bearer&quot;,&quot;clientId&quot;:&quot;Client ID&quot;,&quot;credentialMessage&quot;:&quot;{{projectName}} accepts {{count}} credential methods. You can use {{option}} of them.&quot;,&quot;credentialsFor&quot;:&quot;Credentials for {{name}}&quot;,&quot;credentialsForMd&quot;:&quot;Credentials for `{{name}}`&quot;,&quot;either&quot;:&quot;eitherLog in to use your API keys&quot;,&quot;grantType&quot;:&quot;Grant Type&quot;,&quot;info&quot;:{&quot;base64&quot;:&quot;Your username and password will be combined with a : to form a base64-encoded string: `ENCODED_TOKEN`&quot;,&quot;basic&quot;:&quot;Your username and password are being sent in the [header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) of the request.&quot;,&quot;bearer&quot;:&quot;\n  Bearer authentication gives access to the “bearer of the token” and must be sent in the Authorization header. For example:\n  ```bash\n  curl --request POST \\\n       --url https://httpbin.org/anything/bearer\n       --header 'Authorization: Bearer BEARER_TOKEN'\n  ```\n  &quot;,&quot;cookie&quot;:&quot;Your API Key is being sent as a [cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).&quot;,&quot;header&quot;:&quot;Your API Key is sent in the request [header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).&quot;,&quot;jwt&quot;:&quot;The bearer token's format is JSON Web Token (JWT). Read more at [JWT.io](https://jwt.io/).&quot;,&quot;query&quot;:&quot;Your API Key is being sent as a query parameter in the [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL).&quot;},&quot;infoTable&quot;:{&quot;contact&quot;:&quot;Contact&quot;,&quot;description&quot;:&quot;Description&quot;,&quot;identifier&quot;:&quot;Identifier&quot;,&quot;license&quot;:&quot;License&quot;,&quot;name&quot;:&quot;Name&quot;,&quot;termsOfService&quot;:&quot;Terms of Service&quot;,&quot;title&quot;:&quot;Title&quot;,&quot;summary&quot;:&quot;Summary&quot;,&quot;url&quot;:&quot;URL&quot;,&quot;version&quot;:&quot;Version&quot;},&quot;information&quot;:&quot;Information&quot;,&quot;label&quot;:&quot;Label&quot;,&quot;lastUsed&quot;:&quot;Last Used&quot;,&quot;logInPrompt&quot;:&quot;Log in to use your API keys&quot;,&quot;logOut&quot;:&quot;Log Out&quot;,&quot;password&quot;:&quot;password&quot;,&quot;passwordHideLabel&quot;:&quot;Hide&quot;,&quot;passwordShowLabel&quot;:&quot;Show&quot;,&quot;reAuthorize&quot;:&quot;Re-Authorize&quot;,&quot;required&quot;:&quot;required&quot;,&quot;requiredScopes&quot;:&quot;Required Scopes&quot;,&quot;requiredScopesMissingMsg_one&quot;:&quot;Missing {{count}} required scope&quot;,&quot;requiredScopesMissingMsg_other&quot;:&quot;Missing {{count}} required scopes&quot;,&quot;scopes&quot;:&quot;Scopes&quot;,&quot;scopesMissingCount&quot;:&quot;({{count}} missing from this token)&quot;,&quot;scopesMissingMsg_one&quot;:&quot;This operation requires {{count}} additional scope&quot;,&quot;scopesMissingMsg_other&quot;:&quot;This operation requires {{count}} additional scopes&quot;,&quot;scopesRequiredMsg&quot;:&quot;Scopes required for this operation&quot;,&quot;scopesRequiredNoneMsg&quot;:&quot;No scopes required for this operation&quot;,&quot;selectCredentials&quot;:&quot;Select Credentials&quot;,&quot;token&quot;:&quot;token&quot;,&quot;tokenDetails&quot;:&quot;Token Details&quot;,&quot;tokenRotationMessage&quot;:&quot;We recommend you rotate this token.&quot;,&quot;tokenUrl&quot;:&quot;Token URL&quot;,&quot;useOwnToken&quot;:&quot;Use Your Own Token&quot;,&quot;username&quot;:&quot;username&quot;},&quot;close&quot;:&quot;Close&quot;,&quot;changelog&quot;:{&quot;added&quot;:&quot;Added&quot;,&quot;deprecated&quot;:&quot;Deprecated&quot;,&quot;fixed&quot;:&quot;Fixed&quot;,&quot;improved&quot;:&quot;Improved&quot;,&quot;removed&quot;:&quot;Removed&quot;,&quot;title&quot;:&quot;Changelog&quot;},&quot;copyToClipboard&quot;:{&quot;copiedFull&quot;:&quot;Copied to clipboard!&quot;,&quot;copiedShort&quot;:&quot;Copied!&quot;,&quot;copyFull&quot;:&quot;Copy to clipboard&quot;,&quot;copyShort&quot;:&quot;Copy&quot;,&quot;failed&quot;:&quot;Failed to copy to clipboard.&quot;,&quot;unable&quot;:&quot;Unable to copy&quot;},&quot;discussions&quot;:{&quot;addCommentLabel&quot;:&quot;Add Comment&quot;,&quot;adminLabel&quot;:&quot;Admin&quot;,&quot;answered&quot;:&quot;Answered&quot;,&quot;askQuestion&quot;:&quot;Ask a Question&quot;,&quot;backToAll&quot;:&quot;Back to all&quot;,&quot;blankBodyError&quot;:&quot;Your post body cannot be blank.&quot;,&quot;blankCommentError&quot;:&quot;Your comment cannot be blank.&quot;,&quot;blankPostError&quot;:&quot;Your post cannot be blank.&quot;,&quot;blankTitleError&quot;:&quot;Your post title cannot be blank.&quot;,&quot;cancelButtonLabel&quot;:&quot;Cancel&quot;,&quot;commentAndMarkAnswered&quot;:&quot;Comment and mark answered&quot;,&quot;commentAndReopen&quot;:&quot;Comment and reopen&quot;,&quot;deleteButtonLabel&quot;:&quot;Delete&quot;,&quot;deleteCommentConfirmation&quot;:&quot;Are you sure you want to delete this comment?&quot;,&quot;deleteCommentPermanentConfirmation&quot;:&quot;Are you sure you want to permanently delete this comment?&quot;,&quot;deleteComentSuccess&quot;:&quot;This comment has been deleted&quot;,&quot;deletePermanentlyButtonLabel&quot;:&quot;Permanently Delete&quot;,&quot;deletePostConfirmation&quot;:&quot;Are you sure you want to delete this post?&quot;,&quot;editButtonLabel&quot;:&quot;Edit&quot;,&quot;editedLabel&quot;:&quot;edited&quot;,&quot;emailInputAriaLabel&quot;:&quot;name@email.com&quot;,&quot;emailInputPlaceholder&quot;:&quot;Your Email&quot;,&quot;errorMessagePrefix&quot;:&quot;Error:&quot;,&quot;faqAddLabel&quot;:&quot;Add to FAQ&quot;,&quot;faqRemoveLabel&quot;:&quot;Remove from FAQ&quot;,&quot;faqsLabel&quot;:&quot;FAQs&quot;,&quot;logInToComment&quot;:&quot;&lt;b&gt;Log in&lt;/b&gt; to add a comment.&quot;,&quot;markAsAnswered&quot;:&quot;Mark as answered&quot;,&quot;markAsUnanswered&quot;:&quot;Mark as unanswered&quot;,&quot;markCommentSpamLabel&quot;:&quot;Mark this comment as spam&quot;,&quot;markPostSpamLabel&quot;:&quot;Mark this post as spam&quot;,&quot;nameAndEmailError&quot;:&quot;Please fill out your name and email.&quot;,&quot;nameInputAriaLabel&quot;:&quot;Your name&quot;,&quot;nameInputPlaceholder&quot;:&quot;Full name&quot;,&quot;permanentlyDeleteLabel&quot;:&quot;Permanently delete&quot;,&quot;questionInputAriaLabel&quot;:&quot;New question&quot;,&quot;recaptchaInvalidError&quot;:&quot;Invalid ReCaptcha tokens.&quot;,&quot;recaptchaRequiredError&quot;:&quot;Please complete the reCaptcha verification.&quot;,&quot;recentLabel&quot;:&quot;Recent&quot;,&quot;saveButtonLabel&quot;:&quot;Save&quot;,&quot;submitButtonLabel&quot;:&quot;Post Question&quot;,&quot;tagButtonLabel&quot;:&quot;Tag&quot;,&quot;tagInputPlaceholder&quot;:&quot;Enter tag&quot;,&quot;titleInputAriaLabel&quot;:&quot;Question title&quot;,&quot;titleInputPlaceholder&quot;:&quot;Your question title&quot;,&quot;unansweredLabel&quot;:&quot;Unanswered&quot;,&quot;voteCountLabel&quot;:&quot;{{count}} vote&quot;,&quot;voteCountLabel_plural&quot;:&quot;{{count}} votes&quot;},&quot;emptyState&quot;:{&quot;changelog&quot;:{&quot;title&quot;:&quot;No Changelogs&quot;},&quot;discussion&quot;:{&quot;actionLabel&quot;:&quot;New Question&quot;,&quot;description&quot;:&quot;Nobody's asked a question yet. Be the first!&quot;,&quot;title&quot;:&quot;No Discussions&quot;},&quot;guide&quot;:{&quot;title&quot;:&quot;No Guides&quot;},&quot;recipe&quot;:{&quot;title&quot;:&quot;No Recipes&quot;},&quot;reference&quot;:{&quot;title&quot;:&quot;No API Endpoints&quot;}},&quot;more&quot;:&quot;more…&quot;,&quot;next&quot;:&quot;Next&quot;,&quot;onlyVisibleToAdmins&quot;:&quot;Only visible to ReadMe admins&quot;,&quot;owlbotChat&quot;:{&quot;assistant&quot;:&quot;Assistant&quot;,&quot;clearChat&quot;:&quot;Clear chat history&quot;,&quot;closeChat&quot;:&quot;Close chat&quot;,&quot;emptyMessage&quot;:&quot;I’ll help you find answers in the docs&quot;,&quot;emptyTitle&quot;:&quot;Ask AI&quot;,&quot;failureTitle&quot;:&quot;Ask AI&quot;,&quot;fallbackHeading&quot;:&quot;Something went wrong with Ask AI&quot;,&quot;fallbackMessage&quot;:&quot;Please try refreshing the page or contact support if the problem persists.&quot;,&quot;inputPlaceholder&quot;:&quot;Ask a question&quot;,&quot;sendFailure&quot;:&quot;Failed to send message. Please try again.&quot;,&quot;tryAgain&quot;:&quot;Try Again&quot;,&quot;typingLabel&quot;:&quot;Generating&quot;,&quot;voteFailure&quot;:&quot;Failed to record vote. It may take a moment for the message to be saved. Please try again.&quot;,&quot;voteLabelDown&quot;:&quot;Not helpful&quot;,&quot;voteLabelUp&quot;:&quot;Helpful&quot;},&quot;pageNotFound&quot;:{&quot;heading&quot;:&quot;Page Not Found&quot;,&quot;metaTitle&quot;:&quot;404 Not Found&quot;},&quot;pageThumbs&quot;:{&quot;no&quot;:&quot;No&quot;,&quot;placeHolder&quot;:&quot;Leave an optional comment…&quot;,&quot;prompt&quot;:&quot;Did this page help you?&quot;,&quot;submit&quot;:&quot;Vote&quot;,&quot;thankYou&quot;:&quot;Thanks for voting!&quot;,&quot;yes&quot;:&quot;Yes&quot;},&quot;poweredBy&quot;:&quot;Powered by&quot;,&quot;recipes&quot;:{&quot;inThisRecipe&quot;:&quot;In this Recipe&quot;,&quot;openRecipe&quot;:&quot;Open Recipe&quot;,&quot;step_one&quot;:&quot;{{count}} step&quot;,&quot;step_other&quot;:&quot;{{count}} steps&quot;},&quot;reference&quot;:{&quot;callback&quot;:&quot;Callback&quot;,&quot;clearExample&quot;:&quot;Clear Example&quot;,&quot;clearResponse&quot;:&quot;Clear Response&quot;,&quot;data&quot;:&quot;Data&quot;,&quot;example&quot;:&quot;Example&quot;,&quot;examplePrompt&quot;:&quot;Choose an example&quot;,&quot;examplePromptOr&quot;:&quot;Or choose an example&quot;,&quot;examples&quot;:&quot;Examples&quot;,&quot;headers&quot;:&quot;Headers&quot;,&quot;invalidJSON&quot;:&quot;Invalid JSON&quot;,&quot;inspectRequest&quot;:&quot;Inspect Request&quot;,&quot;jsonEditorAriaLabel&quot;:&quot;Toggle Raw JSON Editor&quot;,&quot;jsonEditorLabel&quot;:&quot;Edit JSON Body&quot;,&quot;language&quot;:&quot;Language&quot;,&quot;library&quot;:&quot;Library&quot;,&quot;log&quot;:&quot;Log&quot;,&quot;logsLoading&quot;:&quot;Retrieving recent requests…&quot;,&quot;logsPrompt&quot;:&quot;Make a request to see history.&quot;,&quot;logsSeeAllLabel&quot;:&quot;See All Requests&quot;,&quot;logsStatusLabel&quot;:&quot;Status&quot;,&quot;logsThisMonth_one&quot;:&quot;{{count}} Request This Month&quot;,&quot;logsThisMonth_other&quot;:&quot;{{count}} Requests This Month&quot;,&quot;logsTimeLabel&quot;:&quot;Time&quot;,&quot;logsUserAgentLabel&quot;:&quot;User Agent&quot;,&quot;payloadExample&quot;:&quot;Payload Example&quot;,&quot;recentRequests&quot;:&quot;Recent Requests&quot;,&quot;replayRequest&quot;:&quot;Replay Request&quot;,&quot;request&quot;:&quot;Request&quot;,&quot;requestExample&quot;:&quot;Request Example&quot;,&quot;requestExamples&quot;:&quot;Request Examples&quot;,&quot;requestHistoryPrompt&quot;:&quot;Log in to see full request history&quot;,&quot;requestInstructions&quot;:&quot;Request instructions&quot;,&quot;resetBody&quot;:&quot;Reset Body&quot;,&quot;response&quot;:&quot;Response&quot;,&quot;sdkCodeEmpty&quot;:&quot;No SDK code available&quot;,&quot;sdkCodeError&quot;:&quot;Error retrieving SDK code. Please try again later.&quot;,&quot;tryIt&quot;:&quot;Try It&quot;,&quot;tryItPrompt&quot;:&quot;Click &lt;code&gt;Try It!&lt;/code&gt; to start a request and see the response here!&quot;,&quot;tryItPunctuated&quot;:&quot;Try It!&quot;},&quot;search&quot;:{&quot;askFailure&quot;:&quot;We had an issue responding, please try again later&quot;,&quot;filtersLabel&quot;:&quot;Filters&quot;,&quot;filtersPlaceholder&quot;:&quot;Filter&quot;,&quot;forMore&quot;:&quot;for more&quot;,&quot;fromTheDocs&quot;:&quot;From the Docs&quot;,&quot;noResults&quot;:&quot;No search results for&quot;,&quot;placeholder&quot;:&quot;Search&quot;,&quot;pressEnterToAskAi&quot;:&quot;Press &lt;kbd&gt;Enter&lt;/kbd&gt; to ask AI&quot;,&quot;promptEmpty&quot;:&quot;Start typing to search…&quot;,&quot;promptLoading&quot;:&quot;Keep typing to search…&quot;,&quot;searching&quot;:&quot;Searching…&quot;,&quot;thinking&quot;:&quot;Thinking&quot;},&quot;sections&quot;:{&quot;all&quot;:&quot;All&quot;,&quot;apiLogs&quot;:&quot;API Logs&quot;,&quot;changelog&quot;:&quot;Changelog&quot;,&quot;discussions&quot;:&quot;Discussions&quot;,&quot;guides&quot;:&quot;Guides&quot;,&quot;graphql&quot;:&quot;GraphQL&quot;,&quot;home&quot;:&quot;Home&quot;,&quot;pages&quot;:&quot;Pages&quot;,&quot;recipes&quot;:&quot;Recipes&quot;,&quot;reference&quot;:&quot;API Reference&quot;},&quot;tableOfContents&quot;:&quot;Table of Contents&quot;,&quot;time&quot;:{&quot;absolute&quot;:{&quot;noPrefix&quot;:&quot;{{time}}&quot;,&quot;noPrefixAttributed&quot;:&quot;{{time}} by {{attribution}}&quot;,&quot;postedPrefix&quot;:&quot;Posted {{time}}&quot;,&quot;postedPrefixAttributed&quot;:&quot;Posted {{time}} by {{attribution}}&quot;,&quot;updatedPrefix&quot;:&quot;Updated {{time}}&quot;,&quot;updatedPrefixAttributed&quot;:&quot;Updated {{time}} by {{attribution}}&quot;},&quot;justNow&quot;:{&quot;noPrefix&quot;:&quot;Less than a minute ago&quot;,&quot;noPrefixAttributed&quot;:&quot;Less than a minute ago by {{attribution}}&quot;,&quot;postedPrefix&quot;:&quot;Posted just now&quot;,&quot;postedPrefixAttributed&quot;:&quot;Posted just now by {{attribution}}&quot;,&quot;updatedPrefix&quot;:&quot;Updated just now&quot;,&quot;updatedPrefixAttributed&quot;:&quot;Updated just now by {{attribution}}&quot;},&quot;relative&quot;:{&quot;noPrefix&quot;:&quot;{{time}}&quot;,&quot;noPrefixAttributed&quot;:&quot;{{time}} by {{attribution}}&quot;,&quot;postedPrefix&quot;:&quot;Posted {{time}}&quot;,&quot;postedPrefixAttributed&quot;:&quot;Posted {{time}} by {{attribution}}&quot;,&quot;updatedPrefix&quot;:&quot;Updated {{time}}&quot;,&quot;updatedPrefixAttributed&quot;:&quot;Updated {{time}} by {{attribution}}&quot;}},&quot;unableToCopy&quot;:&quot;Unable to copy&quot;,&quot;version&quot;:{&quot;beta&quot;:&quot;Beta&quot;,&quot;default&quot;:&quot;Default&quot;,&quot;deprecated&quot;:&quot;Deprecated&quot;,&quot;hiddenLabel&quot;:&quot;Hidden Version&quot;},&quot;whatsNext&quot;:&quot;What’s Next&quot;}}}},&quot;is404&quot;:false,&quot;isFramePreview&quot;:false,&quot;isDetachedProductionSite&quot;:false,&quot;lang&quot;:&quot;en&quot;,&quot;langFull&quot;:&quot;Default&quot;,&quot;reqUrl&quot;:&quot;/reference/get_user_info&quot;,&quot;version&quot;:{&quot;_id&quot;:&quot;66efdce255c029d97fc34a15&quot;,&quot;version&quot;:&quot;1.0&quot;,&quot;version_clean&quot;:&quot;1.0.0&quot;,&quot;codename&quot;:&quot;&quot;,&quot;is_stable&quot;:true,&quot;is_beta&quot;:false,&quot;is_hidden&quot;:false,&quot;is_deprecated&quot;:false,&quot;categories&quot;:[&quot;66efdce255c029d97fc34a17&quot;,&quot;66efdce255c029d97fc34a17&quot;,&quot;66efdce255c029d97fc34a1a&quot;,&quot;66efe4e8280b60000fa8dc92&quot;,&quot;66f017113c6f7f0012092f44&quot;,&quot;66f0174f25ee3e00319377a1&quot;,&quot;66f017a99cfbc20062ac320b&quot;,&quot;66f01bdf1c7acf001b9eb09c&quot;],&quot;pdfStatus&quot;:&quot;&quot;,&quot;project&quot;:&quot;66efdce255c029d97fc34a0f&quot;,&quot;releaseDate&quot;:&quot;2024-09-22T09:01:22.496Z&quot;,&quot;createdAt&quot;:&quot;2024-09-22T09:01:22.538Z&quot;,&quot;updatedAt&quot;:&quot;2025-12-24T08:42:25.040Z&quot;,&quot;__v&quot;:15,&quot;apiRegistries&quot;:[{&quot;filename&quot;:&quot;mini.yaml&quot;,&quot;uuid&quot;:&quot;6j10fmjjrmsn3&quot;}],&quot;source&quot;:&quot;readme&quot;},&quot;gitVersion&quot;:{&quot;base&quot;:null,&quot;display_name&quot;:null,&quot;i18n&quot;:{&quot;lang&quot;:null,&quot;parsed_version&quot;:null},&quot;name&quot;:&quot;1.0&quot;,&quot;release_stage&quot;:&quot;release&quot;,&quot;source&quot;:&quot;readme&quot;,&quot;state&quot;:&quot;current&quot;,&quot;updated_at&quot;:&quot;2025-12-24T08:42:24.000Z&quot;,&quot;uri&quot;:&quot;/branches/1.0&quot;,&quot;privacy&quot;:{&quot;view&quot;:&quot;default&quot;}},&quot;versions&quot;:{&quot;total&quot;:1,&quot;data&quot;:[{&quot;base&quot;:null,&quot;display_name&quot;:null,&quot;i18n&quot;:{&quot;lang&quot;:null,&quot;parsed_version&quot;:null},&quot;name&quot;:&quot;1.0&quot;,&quot;release_stage&quot;:&quot;release&quot;,&quot;source&quot;:&quot;readme&quot;,&quot;state&quot;:&quot;current&quot;,&quot;updated_at&quot;:&quot;2025-12-24T08:42:24.644Z&quot;,&quot;uri&quot;:&quot;/branches/1.0&quot;,&quot;privacy&quot;:{&quot;view&quot;:&quot;default&quot;}}],&quot;type&quot;:&quot;version&quot;}}"></script></div><div id="hub-container"><div class="hub-container"><div state-container ng-attr-id="{{state.current().root !== 'docs' &amp;&amp; 'react-app-content-container'}}"><div id="replace-view" ng-non-bindable></div></div></div></div><script>var is_hub = true;
var is_hub2 = true;
var is_hub_edit = true;
</script><div id="ssr-end"><script id="__LOADABLE_REQUIRED_CHUNKS__" type="application/json">[32852,44863,21456,74935,13766,46123,6146,88836,58577,13221,87327,23781,16563,96652,44915,14838,1714,49809,81380,80957,39602,86805,4321,6349,67852,53463,79711,86180,39819,78749,10949,62398,61924,63859,45798]</script><script id="__LOADABLE_REQUIRED_CHUNKS___ext" type="application/json">{"namedChunks":["routes-SuperHub","Containers-EndUserContainer","Header","core-icons-chevron-up-down-svg","SuperHubSearch","core-icons-search-svg","core-icons-custom-pages-svg","Reference","ConnectMetadata","core-icons-chevron-down-svg","Footer"]}</script>
<script async data-chunk="main" src="https://cdn.readme.io/public/hub/web/main.e07b5f7a2b75e29a4818.js"></script>
<script async data-chunk="routes-SuperHub" src="https://cdn.readme.io/public/hub/web/routes-SuperHub.dbe847b0851db964caad.js"></script>
<script async data-chunk="Containers-EndUserContainer" src="https://cdn.readme.io/public/hub/web/Containers-EndUserContainer.b902e16b915b9acb54fb.js"></script>
<script async data-chunk="Header" src="https://cdn.readme.io/public/hub/web/Header.4d0de3e8a1b6c12a6509.js"></script>
<script async data-chunk="core-icons-chevron-up-down-svg" src="https://cdn.readme.io/public/hub/web/core-icons-chevron-up-down-svg.7e2a19f84d9f878e947a.js"></script>
<script async data-chunk="SuperHubSearch" src="https://cdn.readme.io/public/hub/web/13766.d772ba54efb1db56d529.js"></script>
<script async data-chunk="SuperHubSearch" src="https://cdn.readme.io/public/hub/web/46123.69ebc12c0e2bace354b5.js"></script>
<script async data-chunk="SuperHubSearch" src="https://cdn.readme.io/public/hub/web/6146.f99bcbc8d654cc36d7c8.js"></script>
<script async data-chunk="SuperHubSearch" src="https://cdn.readme.io/public/hub/web/88836.466db83f0dbc8536e6f1.js"></script>
<script async data-chunk="SuperHubSearch" src="https://cdn.readme.io/public/hub/web/SuperHubSearch.0ead958728f6efabb0a4.js"></script>
<script async data-chunk="core-icons-search-svg" src="https://cdn.readme.io/public/hub/web/core-icons-search-svg.188b3766d12ac3a86b64.js"></script>
<script async data-chunk="core-icons-custom-pages-svg" src="https://cdn.readme.io/public/hub/web/core-icons-custom-pages-svg.4af85e07cd1067d86542.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/23781.e74aa301646844cc6f02.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/16563.8ee90e74136685c009f7.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/96652.8b6d209fa5e555ea4745.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/44915.ced5544cfd116c07bcd5.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/14838.f49b570e426ce972793a.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/1714.2c38a72401248177e684.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/49809.bfe85c1aad593aea4118.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/81380.4118a91039e0b316aa16.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/80957.9784e7fabde83e4e0900.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/39602.d6a567a0af33e0e84cf2.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/86805.9855de64ba6674844a32.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/4321.99e7ed648f3bc7e71bd2.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/6349.6701abb57dd60bca35d2.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/67852.8565813f5dcc707f1116.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/53463.c53ae4ddd5e88be8a73a.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/79711.d5a913b5bac72c11f75d.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/86180.4f85a8505e706cde0edd.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/39819.bd1e3d3ce6c88b669b49.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/78749.7ad8f9eae1668e7d5404.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/10949.ec4db2d4c5b8f788b624.js"></script>
<script async data-chunk="Reference" src="https://cdn.readme.io/public/hub/web/Reference.0ca3eb11124e3b2f68d3.js"></script>
<script async data-chunk="ConnectMetadata" src="https://cdn.readme.io/public/hub/web/ConnectMetadata.cc6ca7d8f0a3ad9514e4.js"></script>
<script async data-chunk="core-icons-chevron-down-svg" src="https://cdn.readme.io/public/hub/web/core-icons-chevron-down-svg.1500d4048db301af0f24.js"></script>
<script async data-chunk="Footer" src="https://cdn.readme.io/public/hub/web/Footer.b22d47c399e3de6aa385.js"></script></div><script id="hub-me" type="application/json" data-json="{&quot;loggedIn&quot;:false,&quot;search&quot;:{&quot;app&quot;:&quot;T28YKFATPY&quot;,&quot;token&quot;:&quot;NTg0ZDQwY2EwNDYzOGQ3NjQyYWI4YzQxNTNkMmY3NzVjNTAzOWEyOWRmYmMyZjE5NWZlNTAyMDJjMjY3MjY2M3RhZ0ZpbHRlcnM9KHByb2plY3Q6NjZlZmRjZTI1NWMwMjlkOTdmYzM0YTBmKSwodmVyc2lvbjpub25lLHZlcnNpb246NjZlZmRjZTI1NWMwMjlkOTdmYzM0YTE1KSwoaGlkZGVuOm5vbmUsaGlkZGVuOmZhbHNlKSwoaW5kZXg6Q3VzdG9tUGFnZSxpbmRleDpQYWdlLGluZGV4OkJsb2cp&quot;,&quot;filters&quot;:&quot;tagFilters=(project:66efdce255c029d97fc34a0f),(version:none,version:66efdce255c029d97fc34a15),(hidden:none,hidden:false),(index:CustomPage,index:Page,index:Blog)&quot;,&quot;metaData&quot;:[{&quot;modules&quot;:{&quot;landing&quot;:false,&quot;docs&quot;:true,&quot;examples&quot;:true,&quot;reference&quot;:true,&quot;graphql&quot;:false,&quot;changelog&quot;:true,&quot;discuss&quot;:false,&quot;suggested_edits&quot;:false,&quot;custompages&quot;:false,&quot;tutorials&quot;:false},&quot;id&quot;:&quot;66efdce255c029d97fc34a0f&quot;,&quot;name&quot;:&quot;Nana Mini Apps&quot;,&quot;subdomain&quot;:&quot;mini-nana&quot;,&quot;subpath&quot;:&quot;&quot;,&quot;nav_names&quot;:{&quot;docs&quot;:&quot;&quot;,&quot;reference&quot;:&quot;&quot;,&quot;changelog&quot;:&quot;&quot;,&quot;discuss&quot;:&quot;&quot;,&quot;recipes&quot;:&quot;&quot;,&quot;tutorials&quot;:&quot;&quot;}}]}}"></script><script id="readme-data-baseUrl" type="application/json"></script></body></html>
Create Payment Session

# Create Payment Session

Create a new payment session for the mobile user.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Payment",
      "description": "Endpoints related to user Payment flow."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-activities/create-payment-session": {
      "post": {
        "tags": [
          "Payment"
        ],
        "summary": "Create Payment Session",
        "description": "Create a new payment session for the mobile user.",
        "operationId": "createPaymentSession",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "amount",
                  "reference"
                ],
                "properties": {
                  "amount": {
                    "type": "number",
                    "format": "float",
                    "example": 2.2
                  },
                  "reference": {
                    "type": "string",
                    "example": "reference"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Payment session successfully created.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "payment_session_secret": {
                          "type": "string",
                          "example": "pss_8b1bd194-69f6-4ce8-9838-4dfa6b277891"
                        },
                        "payment_session_token": {
                          "type": "string",
                          "example": "YmFzZTY0:eyJpZCI6InBzXzM0U1pvNks3RzNDR..."
                        },
                        "id": {
                          "type": "string",
                          "example": "ps_34SZo6K7G3CFLHe72xwNXFXUqBb"
                        },
                        "_links": {
                          "type": "object",
                          "properties": {
                            "self": {
                              "type": "object",
                              "properties": {
                                "href": {
                                  "type": "string",
                                  "example": "https://api.sandbox.checkout.com/payment-sessions/ps_34SZo6K7G3CFLHe72xwNXFXUqBb"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Payment",
      "description": "Endpoints related to user Payment flow."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-activities/create-payment-session": {
      "post": {
        "tags": [
          "Payment"
        ],
        "summary": "Create Payment Session",
        "description": "Create a new payment session for the mobile user.",
        "operationId": "createPaymentSession",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "amount",
                  "reference"
                ],
                "properties": {
                  "amount": {
                    "type": "number",
                    "format": "float",
                    "example": 2.2
                  },
                  "reference": {
                    "type": "string",
                    "example": "reference"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Payment session successfully created.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "payment_session_secret": {
                          "type": "string",
                          "example": "pss_8b1bd194-69f6-4ce8-9838-4dfa6b277891"
                        },
                        "payment_session_token": {
                          "type": "string",
                          "example": "YmFzZTY0:eyJpZCI6InBzXzM0U1pvNks3RzNDR..."
                        },
                        "id": {
                          "type": "string",
                          "example": "ps_34SZo6K7G3CFLHe72xwNXFXUqBb"
                        },
                        "_links": {
                          "type": "object",
                          "properties": {
                            "self": {
                              "type": "object",
                              "properties": {
                                "href": {
                                  "type": "string",
                                  "example": "https://api.sandbox.checkout.com/payment-sessions/ps_34SZo6K7G3CFLHe72xwNXFXUqBb"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```
Create Payment Session

# Create Payment Session

Create a new payment session for the mobile user.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Payment",
      "description": "Endpoints related to user Payment flow."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-activities/create-payment-session": {
      "post": {
        "tags": [
          "Payment"
        ],
        "summary": "Create Payment Session",
        "description": "Create a new payment session for the mobile user.",
        "operationId": "createPaymentSession",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "amount",
                  "reference"
                ],
                "properties": {
                  "amount": {
                    "type": "number",
                    "format": "float",
                    "example": 2.2
                  },
                  "reference": {
                    "type": "string",
                    "example": "reference"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Payment session successfully created.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "payment_session_secret": {
                          "type": "string",
                          "example": "pss_8b1bd194-69f6-4ce8-9838-4dfa6b277891"
                        },
                        "payment_session_token": {
                          "type": "string",
                          "example": "YmFzZTY0:eyJpZCI6InBzXzM0U1pvNks3RzNDR..."
                        },
                        "id": {
                          "type": "string",
                          "example": "ps_34SZo6K7G3CFLHe72xwNXFXUqBb"
                        },
                        "_links": {
                          "type": "object",
                          "properties": {
                            "self": {
                              "type": "object",
                              "properties": {
                                "href": {
                                  "type": "string",
                                  "example": "https://api.sandbox.checkout.com/payment-sessions/ps_34SZo6K7G3CFLHe72xwNXFXUqBb"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Payment",
      "description": "Endpoints related to user Payment flow."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-activities/create-payment-session": {
      "post": {
        "tags": [
          "Payment"
        ],
        "summary": "Create Payment Session",
        "description": "Create a new payment session for the mobile user.",
        "operationId": "createPaymentSession",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "amount",
                  "reference"
                ],
                "properties": {
                  "amount": {
                    "type": "number",
                    "format": "float",
                    "example": 2.2
                  },
                  "reference": {
                    "type": "string",
                    "example": "reference"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Payment session successfully created.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "payment_session_secret": {
                          "type": "string",
                          "example": "pss_8b1bd194-69f6-4ce8-9838-4dfa6b277891"
                        },
                        "payment_session_token": {
                          "type": "string",
                          "example": "YmFzZTY0:eyJpZCI6InBzXzM0U1pvNks3RzNDR..."
                        },
                        "id": {
                          "type": "string",
                          "example": "ps_34SZo6K7G3CFLHe72xwNXFXUqBb"
                        },
                        "_links": {
                          "type": "object",
                          "properties": {
                            "self": {
                              "type": "object",
                              "properties": {
                                "href": {
                                  "type": "string",
                                  "example": "https://api.sandbox.checkout.com/payment-sessions/ps_34SZo6K7G3CFLHe72xwNXFXUqBb"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```
Get Payment Session

# Get Payment Session

Retrieve details of a single payment session by session ID.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Payment",
      "description": "Endpoints related to user Payment flow."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-activities/get-payment-session/{session_id}": {
      "get": {
        "tags": [
          "Payment"
        ],
        "summary": "Get Payment Session",
        "description": "Retrieve details of a single payment session by session ID.",
        "operationId": "getPaymentSession",
        "parameters": [
          {
            "name": "session_id",
            "in": "path",
            "required": true,
            "description": "Payment session ID.",
            "schema": {
              "type": "string",
              "example": "ps_34MsTzs9K4ickFpHAMIbnEHiVZy"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "Bearer token for user authentication.",
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "API key for authentication.",
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          },
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved the payment session.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 221
                        },
                        "session_id": {
                          "type": "string",
                          "example": "ps_34MsTzs9K4ickFpHAMIbnEHiVZy"
                        },
                        "customer_id": {
                          "type": "string",
                          "example": "USR00000071@nana.sa"
                        },
                        "mini_app_id": {
                          "type": "string",
                          "example": "fc2888590944158341"
                        },
                        "reference": {
                          "type": "string",
                          "example": "reference--reference"
                        },
                        "amount": {
                          "type": "number",
                          "format": "float",
                          "example": 10
                        },
                        "status": {
                          "type": "string",
                          "example": "closed"
                        },
                        "payment_status": {
                          "type": "string",
                          "example": "refunded"
                        },
                        "created_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-21T08:19:46.102215+00:00"
                        },
                        "updated_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-23T07:46:59.645015+00:00"
                        },
                        "response": {
                          "type": "string",
                          "nullable": true,
                          "example": null
                        },
                        "payment_id": {
                          "type": "string",
                          "nullable": true,
                          "example": null
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid session ID."
          },
          "401": {
            "description": "Unauthorized — invalid token or API key."
          },
          "404": {
            "description": "Payment session not found."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Payment",
      "description": "Endpoints related to user Payment flow."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-activities/get-payment-session/{session_id}": {
      "get": {
        "tags": [
          "Payment"
        ],
        "summary": "Get Payment Session",
        "description": "Retrieve details of a single payment session by session ID.",
        "operationId": "getPaymentSession",
        "parameters": [
          {
            "name": "session_id",
            "in": "path",
            "required": true,
            "description": "Payment session ID.",
            "schema": {
              "type": "string",
              "example": "ps_34MsTzs9K4ickFpHAMIbnEHiVZy"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "Bearer token for user authentication.",
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "API key for authentication.",
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          },
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved the payment session.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 221
                        },
                        "session_id": {
                          "type": "string",
                          "example": "ps_34MsTzs9K4ickFpHAMIbnEHiVZy"
                        },
                        "customer_id": {
                          "type": "string",
                          "example": "USR00000071@nana.sa"
                        },
                        "mini_app_id": {
                          "type": "string",
                          "example": "fc2888590944158341"
                        },
                        "reference": {
                          "type": "string",
                          "example": "reference--reference"
                        },
                        "amount": {
                          "type": "number",
                          "format": "float",
                          "example": 10
                        },
                        "status": {
                          "type": "string",
                          "example": "closed"
                        },
                        "payment_status": {
                          "type": "string",
                          "example": "refunded"
                        },
                        "created_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-21T08:19:46.102215+00:00"
                        },
                        "updated_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-23T07:46:59.645015+00:00"
                        },
                        "response": {
                          "type": "string",
                          "nullable": true,
                          "example": null
                        },
                        "payment_id": {
                          "type": "string",
                          "nullable": true,
                          "example": null
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid session ID."
          },
          "401": {
            "description": "Unauthorized — invalid token or API key."
          },
          "404": {
            "description": "Payment session not found."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```
Refund Payment Session

# Refund Payment Session

Refund a payment session by its session ID.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Payment",
      "description": "Endpoints related to user Payment flow."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-activities/refund-payment-session/{session_id}": {
      "get": {
        "tags": [
          "Payment"
        ],
        "summary": "Refund Payment Session",
        "description": "Refund a payment session by its session ID.",
        "operationId": "RefundRefundPaymentSession",
        "parameters": [
          {
            "name": "session_id",
            "in": "path",
            "required": true,
            "description": "Payment session ID to Refund.",
            "schema": {
              "type": "string",
              "example": "ps_34MsTzs9K4ickFpHAMIbnEHiVZy"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "Bearer token for user authentication.",
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "API key for authentication.",
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          },
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved the payment session.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 221
                        },
                        "session_id": {
                          "type": "string",
                          "example": "ps_34MsTzs9K4ickFpHAMIbnEHiVZy"
                        },
                        "customer_id": {
                          "type": "string",
                          "example": "USR00000071@nana.sa"
                        },
                        "mini_app_id": {
                          "type": "string",
                          "example": "fc2888590944158341"
                        },
                        "reference": {
                          "type": "string",
                          "example": "reference--reference"
                        },
                        "amount": {
                          "type": "number",
                          "format": "float",
                          "example": 10
                        },
                        "status": {
                          "type": "string",
                          "example": "closed"
                        },
                        "payment_status": {
                          "type": "string",
                          "example": "refunded"
                        },
                        "created_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-21T08:19:46.102215+00:00"
                        },
                        "updated_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-23T07:46:59.645015+00:00"
                        },
                        "response": {
                          "type": "string",
                          "nullable": true,
                          "example": null
                        },
                        "payment_id": {
                          "type": "string",
                          "nullable": true,
                          "example": null
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid session ID."
          },
          "401": {
            "description": "Unauthorized — invalid token or API key."
          },
          "404": {
            "description": "Payment session not found."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Payment",
      "description": "Endpoints related to user Payment flow."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-activities/refund-payment-session/{session_id}": {
      "get": {
        "tags": [
          "Payment"
        ],
        "summary": "Refund Payment Session",
        "description": "Refund a payment session by its session ID.",
        "operationId": "RefundRefundPaymentSession",
        "parameters": [
          {
            "name": "session_id",
            "in": "path",
            "required": true,
            "description": "Payment session ID to Refund.",
            "schema": {
              "type": "string",
              "example": "ps_34MsTzs9K4ickFpHAMIbnEHiVZy"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "Bearer token for user authentication.",
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "API key for authentication.",
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          },
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved the payment session.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 221
                        },
                        "session_id": {
                          "type": "string",
                          "example": "ps_34MsTzs9K4ickFpHAMIbnEHiVZy"
                        },
                        "customer_id": {
                          "type": "string",
                          "example": "USR00000071@nana.sa"
                        },
                        "mini_app_id": {
                          "type": "string",
                          "example": "fc2888590944158341"
                        },
                        "reference": {
                          "type": "string",
                          "example": "reference--reference"
                        },
                        "amount": {
                          "type": "number",
                          "format": "float",
                          "example": 10
                        },
                        "status": {
                          "type": "string",
                          "example": "closed"
                        },
                        "payment_status": {
                          "type": "string",
                          "example": "refunded"
                        },
                        "created_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-21T08:19:46.102215+00:00"
                        },
                        "updated_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-23T07:46:59.645015+00:00"
                        },
                        "response": {
                          "type": "string",
                          "nullable": true,
                          "example": null
                        },
                        "payment_id": {
                          "type": "string",
                          "nullable": true,
                          "example": null
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid session ID."
          },
          "401": {
            "description": "Unauthorized — invalid token or API key."
          },
          "404": {
            "description": "Payment session not found."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```
Get order activities

# Get order activities

Retrieve a list of order activities filtered by status or external_status.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Order",
      "description": "user order Activities"
    }
  ],
  "paths": {
    "/api/v1/order/activities": {
      "get": {
        "tags": [
          "Order"
        ],
        "summary": "Get order activities",
        "description": "Retrieve a list of order activities filtered by status or external_status.",
        "operationId": "ListOrderActivities",
        "parameters": [
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "API key for MiniApp authorization.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "Bearer JWT token of the MiniApp user.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "required": false,
            "description": "Filter orders by their status.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "external_status",
            "in": "query",
            "required": false,
            "description": "Filter orders by their external status.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response with list of order activities.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string",
                      "nullable": true
                    },
                    "orders": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "order_id": {
                            "type": "string"
                          },
                          "user_id": {
                            "type": "string"
                          },
                          "status": {
                            "type": "string"
                          },
                          "external_status": {
                            "type": "string"
                          },
                          "total_amount": {
                            "type": "string"
                          },
                          "rating": {
                            "type": "string"
                          },
                          "redirect_url": {
                            "type": "string"
                          },
                          "invoice_url": {
                            "type": "string"
                          },
                          "icon": {
                            "type": "string"
                          },
                          "source": {
                            "type": "string"
                          },
                          "items": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "product_id": {
                                  "type": "string"
                                },
                                "name_ar": {
                                  "type": "string"
                                },
                                "name_en": {
                                  "type": "string"
                                },
                                "quantity": {
                                  "type": "integer"
                                }
                              }
                            }
                          },
                          "delivery_info": {
                            "type": "object",
                            "properties": {
                              "address": {
                                "type": "string"
                              },
                              "delivery_time": {
                                "type": "string",
                                "format": "date-time"
                              }
                            }
                          },
                          "events": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "status": {
                                  "type": "string"
                                },
                                "timestamp": {
                                  "type": "string",
                                  "format": "date-time"
                                }
                              }
                            }
                          },
                          "store": {
                            "type": "object",
                            "properties": {
                              "name_ar": {
                                "type": "string"
                              },
                              "name_en": {
                                "type": "string"
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "updated_at": {
                            "type": "string",
                            "format": "date-time"
                          }
                        }
                      }
                    }
                  }
                },
                "example": {
                  "error": null,
                  "orders": [
                    {
                      "order_id": "ORD123456111-11",
                      "user_id": "USR00000071@nana.sa",
                      "status": "pending",
                      "external_status": "created",
                      "total_amount": "120.50",
                      "rating": "",
                      "redirect_url": "https://example.com/redirect",
                      "invoice_url": "https://example.com/invoice",
                      "icon": "https://example.com/icon.png",
                      "source": "co.nana.camelflight.staging",
                      "items": [
                        {
                          "product_id": "PROD001",
                          "name_ar": "منتج 1",
                          "name_en": "Product 1",
                          "quantity": 2
                        },
                        {
                          "product_id": "PROD002",
                          "name_ar": "منتج 2",
                          "name_en": "Product 2",
                          "quantity": 1
                        }
                      ],
                      "delivery_info": {
                        "address": "123 Main St, Cairo",
                        "delivery_time": "2025-11-09T18:00:00+02:00"
                      },
                      "events": [
                        {
                          "status": "pending",
                          "timestamp": "2025-11-13T10:29:39.946Z"
                        },
                        {
                          "status": "pending",
                          "timestamp": "2025-11-13T10:43:04.429Z"
                        }
                      ],
                      "store": {
                        "name_ar": "متجر تجريبي",
                        "name_en": "Demo Store"
                      },
                      "created_at": "2025-11-09T13:00:00Z",
                      "updated_at": "2025-11-13T10:43:04.429Z"
                    }
                  ]
                }
              }
            }
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Order",
      "description": "user order Activities"
    }
  ],
  "paths": {
    "/api/v1/order/activities": {
      "get": {
        "tags": [
          "Order"
        ],
        "summary": "Get order activities",
        "description": "Retrieve a list of order activities filtered by status or external_status.",
        "operationId": "ListOrderActivities",
        "parameters": [
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "API key for MiniApp authorization.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "Bearer JWT token of the MiniApp user.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "required": false,
            "description": "Filter orders by their status.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "external_status",
            "in": "query",
            "required": false,
            "description": "Filter orders by their external status.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response with list of order activities.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string",
                      "nullable": true
                    },
                    "orders": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "order_id": {
                            "type": "string"
                          },
                          "user_id": {
                            "type": "string"
                          },
                          "status": {
                            "type": "string"
                          },
                          "external_status": {
                            "type": "string"
                          },
                          "total_amount": {
                            "type": "string"
                          },
                          "rating": {
                            "type": "string"
                          },
                          "redirect_url": {
                            "type": "string"
                          },
                          "invoice_url": {
                            "type": "string"
                          },
                          "icon": {
                            "type": "string"
                          },
                          "source": {
                            "type": "string"
                          },
                          "items": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "product_id": {
                                  "type": "string"
                                },
                                "name_ar": {
                                  "type": "string"
                                },
                                "name_en": {
                                  "type": "string"
                                },
                                "quantity": {
                                  "type": "integer"
                                }
                              }
                            }
                          },
                          "delivery_info": {
                            "type": "object",
                            "properties": {
                              "address": {
                                "type": "string"
                              },
                              "delivery_time": {
                                "type": "string",
                                "format": "date-time"
                              }
                            }
                          },
                          "events": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "status": {
                                  "type": "string"
                                },
                                "timestamp": {
                                  "type": "string",
                                  "format": "date-time"
                                }
                              }
                            }
                          },
                          "store": {
                            "type": "object",
                            "properties": {
                              "name_ar": {
                                "type": "string"
                              },
                              "name_en": {
                                "type": "string"
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "updated_at": {
                            "type": "string",
                            "format": "date-time"
                          }
                        }
                      }
                    }
                  }
                },
                "example": {
                  "error": null,
                  "orders": [
                    {
                      "order_id": "ORD123456111-11",
                      "user_id": "USR00000071@nana.sa",
                      "status": "pending",
                      "external_status": "created",
                      "total_amount": "120.50",
                      "rating": "",
                      "redirect_url": "https://example.com/redirect",
                      "invoice_url": "https://example.com/invoice",
                      "icon": "https://example.com/icon.png",
                      "source": "co.nana.camelflight.staging",
                      "items": [
                        {
                          "product_id": "PROD001",
                          "name_ar": "منتج 1",
                          "name_en": "Product 1",
                          "quantity": 2
                        },
                        {
                          "product_id": "PROD002",
                          "name_ar": "منتج 2",
                          "name_en": "Product 2",
                          "quantity": 1
                        }
                      ],
                      "delivery_info": {
                        "address": "123 Main St, Cairo",
                        "delivery_time": "2025-11-09T18:00:00+02:00"
                      },
                      "events": [
                        {
                          "status": "pending",
                          "timestamp": "2025-11-13T10:29:39.946Z"
                        },
                        {
                          "status": "pending",
                          "timestamp": "2025-11-13T10:43:04.429Z"
                        }
                      ],
                      "store": {
                        "name_ar": "متجر تجريبي",
                        "name_en": "Demo Store"
                      },
                      "created_at": "2025-11-09T13:00:00Z",
                      "updated_at": "2025-11-13T10:43:04.429Z"
                    }
                  ]
                }
              }
            }
          }
        }
      }
    }
  }
}
```
Create a new order activity

# Create a new order activity

Create or update an order activity for a MiniApp user.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Order",
      "description": "user order Activities"
    }
  ],
  "paths": {
    "/api/v1/order/activities": {
      "post": {
        "tags": [
          "Order"
        ],
        "summary": "Create a new order activity",
        "description": "Create or update an order activity for a MiniApp user.",
        "operationId": "CreateOrderActivities",
        "parameters": [
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "API key for MiniApp authorization.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "Bearer JWT token of the MiniApp user.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "order_id": {
                    "type": "string"
                  },
                  "user_id": {
                    "type": "string"
                  },
                  "status": {
                    "type": "string"
                  },
                  "external_status": {
                    "type": "string"
                  },
                  "total_amount": {
                    "type": "string"
                  },
                  "rating": {
                    "type": "string"
                  },
                  "redirect_url": {
                    "type": "string"
                  },
                  "invoice_url": {
                    "type": "string"
                  },
                  "icon": {
                    "type": "string"
                  },
                  "source": {
                    "type": "string"
                  },
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "product_id": {
                          "type": "string"
                        },
                        "name_ar": {
                          "type": "string"
                        },
                        "name_en": {
                          "type": "string"
                        },
                        "quantity": {
                          "type": "integer"
                        }
                      }
                    }
                  },
                  "delivery_info": {
                    "type": "object",
                    "properties": {
                      "address": {
                        "type": "string"
                      },
                      "delivery_time": {
                        "type": "string",
                        "format": "date-time"
                      }
                    }
                  },
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "string"
                        },
                        "timestamp": {
                          "type": "string",
                          "format": "date-time"
                        }
                      }
                    }
                  },
                  "store": {
                    "type": "object",
                    "properties": {
                      "name_ar": {
                        "type": "string"
                      },
                      "name_en": {
                        "type": "string"
                      }
                    }
                  },
                  "created_at": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "updated_at": {
                    "type": "string",
                    "format": "date-time"
                  }
                }
              },
              "example": {
                "order_id": "ORD123456111-11",
                "user_id": "user@example.com",
                "status": "pending",
                "external_status": "created",
                "total_amount": "120.50",
                "rating": "",
                "redirect_url": "https://example.com/redirect",
                "invoice_url": "https://example.com/invoice",
                "icon": "https://example.com/icon.png",
                "source": "app",
                "items": [
                  {
                    "product_id": "PROD001",
                    "name_ar": "منتج 1",
                    "name_en": "Product 1",
                    "quantity": 2
                  },
                  {
                    "product_id": "PROD002",
                    "name_ar": "منتج 2",
                    "name_en": "Product 2",
                    "quantity": 1
                  }
                ],
                "delivery_info": {
                  "address": "123 Main St, Cairo",
                  "delivery_time": "2025-11-09T18:00:00+02:00"
                },
                "events": [
                  {
                    "status": "created",
                    "timestamp": "2025-11-09T15:00:00+02:00"
                  }
                ],
                "store": {
                  "name_ar": "متجر تجريبي",
                  "name_en": "Demo Store"
                },
                "created_at": "2025-11-09T15:00:00+02:00",
                "updated_at": "2025-11-09T15:05:00+02:00"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Order activity created successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string",
                      "nullable": true
                    },
                    "order_id": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": null,
                  "order_id": "ORD123456111-11"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Order",
      "description": "user order Activities"
    }
  ],
  "paths": {
    "/api/v1/order/activities": {
      "post": {
        "tags": [
          "Order"
        ],
        "summary": "Create a new order activity",
        "description": "Create or update an order activity for a MiniApp user.",
        "operationId": "CreateOrderActivities",
        "parameters": [
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "API key for MiniApp authorization.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "Bearer JWT token of the MiniApp user.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "order_id": {
                    "type": "string"
                  },
                  "user_id": {
                    "type": "string"
                  },
                  "status": {
                    "type": "string"
                  },
                  "external_status": {
                    "type": "string"
                  },
                  "total_amount": {
                    "type": "string"
                  },
                  "rating": {
                    "type": "string"
                  },
                  "redirect_url": {
                    "type": "string"
                  },
                  "invoice_url": {
                    "type": "string"
                  },
                  "icon": {
                    "type": "string"
                  },
                  "source": {
                    "type": "string"
                  },
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "product_id": {
                          "type": "string"
                        },
                        "name_ar": {
                          "type": "string"
                        },
                        "name_en": {
                          "type": "string"
                        },
                        "quantity": {
                          "type": "integer"
                        }
                      }
                    }
                  },
                  "delivery_info": {
                    "type": "object",
                    "properties": {
                      "address": {
                        "type": "string"
                      },
                      "delivery_time": {
                        "type": "string",
                        "format": "date-time"
                      }
                    }
                  },
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "status": {
                          "type": "string"
                        },
                        "timestamp": {
                          "type": "string",
                          "format": "date-time"
                        }
                      }
                    }
                  },
                  "store": {
                    "type": "object",
                    "properties": {
                      "name_ar": {
                        "type": "string"
                      },
                      "name_en": {
                        "type": "string"
                      }
                    }
                  },
                  "created_at": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "updated_at": {
                    "type": "string",
                    "format": "date-time"
                  }
                }
              },
              "example": {
                "order_id": "ORD123456111-11",
                "user_id": "user@example.com",
                "status": "pending",
                "external_status": "created",
                "total_amount": "120.50",
                "rating": "",
                "redirect_url": "https://example.com/redirect",
                "invoice_url": "https://example.com/invoice",
                "icon": "https://example.com/icon.png",
                "source": "app",
                "items": [
                  {
                    "product_id": "PROD001",
                    "name_ar": "منتج 1",
                    "name_en": "Product 1",
                    "quantity": 2
                  },
                  {
                    "product_id": "PROD002",
                    "name_ar": "منتج 2",
                    "name_en": "Product 2",
                    "quantity": 1
                  }
                ],
                "delivery_info": {
                  "address": "123 Main St, Cairo",
                  "delivery_time": "2025-11-09T18:00:00+02:00"
                },
                "events": [
                  {
                    "status": "created",
                    "timestamp": "2025-11-09T15:00:00+02:00"
                  }
                ],
                "store": {
                  "name_ar": "متجر تجريبي",
                  "name_en": "Demo Store"
                },
                "created_at": "2025-11-09T15:00:00+02:00",
                "updated_at": "2025-11-09T15:05:00+02:00"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Order activity created successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string",
                      "nullable": true
                    },
                    "order_id": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": null,
                  "order_id": "ORD123456111-11"
                }
              }
            }
          }
        }
      }
    }
  }
}
```
Get order activity by ID

# Get order activity by ID

Retrieve a single order activity by its order_id.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Order",
      "description": "user order Activities"
    }
  ],
  "paths": {
    "/api/v1/order/activities/{order_id}": {
      "get": {
        "tags": [
          "Order"
        ],
        "summary": "Get order activity by ID",
        "description": "Retrieve a single order activity by its order_id.",
        "operationId": "getOrderActivities",
        "parameters": [
          {
            "name": "order_id",
            "in": "path",
            "required": true,
            "description": "The ID of the order to retrieve.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "API key for MiniApp authorization.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "Bearer JWT token of the MiniApp user.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response with order details.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "order_id": {
                      "type": "string"
                    },
                    "user_id": {
                      "type": "string"
                    },
                    "status": {
                      "type": "string"
                    },
                    "external_status": {
                      "type": "string"
                    },
                    "total_amount": {
                      "type": "string"
                    },
                    "rating": {
                      "type": "string"
                    },
                    "redirect_url": {
                      "type": "string"
                    },
                    "invoice_url": {
                      "type": "string"
                    },
                    "icon": {
                      "type": "string"
                    },
                    "source": {
                      "type": "string"
                    },
                    "items": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "product_id": {
                            "type": "string"
                          },
                          "name_ar": {
                            "type": "string"
                          },
                          "name_en": {
                            "type": "string"
                          },
                          "quantity": {
                            "type": "integer"
                          }
                        }
                      }
                    },
                    "delivery_info": {
                      "type": "object",
                      "properties": {
                        "address": {
                          "type": "string"
                        },
                        "delivery_time": {
                          "type": "string",
                          "format": "date-time"
                        }
                      }
                    },
                    "events": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "string"
                          },
                          "timestamp": {
                            "type": "string",
                            "format": "date-time"
                          }
                        }
                      }
                    },
                    "store": {
                      "type": "object",
                      "properties": {
                        "name_ar": {
                          "type": "string"
                        },
                        "name_en": {
                          "type": "string"
                        }
                      }
                    },
                    "created_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "updated_at": {
                      "type": "string",
                      "format": "date-time"
                    }
                  }
                },
                "example": {
                  "order_id": "ORD123456111-11",
                  "user_id": "USR00000071@nana.sa",
                  "status": "pending",
                  "external_status": "created",
                  "total_amount": "120.50",
                  "rating": "",
                  "redirect_url": "https://example.com/redirect",
                  "invoice_url": "https://example.com/invoice",
                  "icon": "https://example.com/icon.png",
                  "source": "co.nana.camelflight.staging",
                  "items": [
                    {
                      "product_id": "PROD001",
                      "name_ar": "منتج 1",
                      "name_en": "Product 1",
                      "quantity": 2
                    },
                    {
                      "product_id": "PROD002",
                      "name_ar": "منتج 2",
                      "name_en": "Product 2",
                      "quantity": 1
                    }
                  ],
                  "delivery_info": {
                    "address": "123 Main St, Cairo",
                    "delivery_time": "2025-11-09T18:00:00+02:00"
                  },
                  "events": [
                    {
                      "status": "pending",
                      "timestamp": "2025-11-13T10:29:39.946Z"
                    },
                    {
                      "status": "pending",
                      "timestamp": "2025-11-13T10:43:04.429Z"
                    }
                  ],
                  "store": {
                    "name_ar": "متجر تجريبي",
                    "name_en": "Demo Store"
                  },
                  "created_at": "2025-11-09T13:00:00Z",
                  "updated_at": "2025-11-13T10:43:04.429Z"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Order",
      "description": "user order Activities"
    }
  ],
  "paths": {
    "/api/v1/order/activities/{order_id}": {
      "get": {
        "tags": [
          "Order"
        ],
        "summary": "Get order activity by ID",
        "description": "Retrieve a single order activity by its order_id.",
        "operationId": "getOrderActivities",
        "parameters": [
          {
            "name": "order_id",
            "in": "path",
            "required": true,
            "description": "The ID of the order to retrieve.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "API key for MiniApp authorization.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "Bearer JWT token of the MiniApp user.",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response with order details.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "order_id": {
                      "type": "string"
                    },
                    "user_id": {
                      "type": "string"
                    },
                    "status": {
                      "type": "string"
                    },
                    "external_status": {
                      "type": "string"
                    },
                    "total_amount": {
                      "type": "string"
                    },
                    "rating": {
                      "type": "string"
                    },
                    "redirect_url": {
                      "type": "string"
                    },
                    "invoice_url": {
                      "type": "string"
                    },
                    "icon": {
                      "type": "string"
                    },
                    "source": {
                      "type": "string"
                    },
                    "items": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "product_id": {
                            "type": "string"
                          },
                          "name_ar": {
                            "type": "string"
                          },
                          "name_en": {
                            "type": "string"
                          },
                          "quantity": {
                            "type": "integer"
                          }
                        }
                      }
                    },
                    "delivery_info": {
                      "type": "object",
                      "properties": {
                        "address": {
                          "type": "string"
                        },
                        "delivery_time": {
                          "type": "string",
                          "format": "date-time"
                        }
                      }
                    },
                    "events": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "string"
                          },
                          "timestamp": {
                            "type": "string",
                            "format": "date-time"
                          }
                        }
                      }
                    },
                    "store": {
                      "type": "object",
                      "properties": {
                        "name_ar": {
                          "type": "string"
                        },
                        "name_en": {
                          "type": "string"
                        }
                      }
                    },
                    "created_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "updated_at": {
                      "type": "string",
                      "format": "date-time"
                    }
                  }
                },
                "example": {
                  "order_id": "ORD123456111-11",
                  "user_id": "USR00000071@nana.sa",
                  "status": "pending",
                  "external_status": "created",
                  "total_amount": "120.50",
                  "rating": "",
                  "redirect_url": "https://example.com/redirect",
                  "invoice_url": "https://example.com/invoice",
                  "icon": "https://example.com/icon.png",
                  "source": "co.nana.camelflight.staging",
                  "items": [
                    {
                      "product_id": "PROD001",
                      "name_ar": "منتج 1",
                      "name_en": "Product 1",
                      "quantity": 2
                    },
                    {
                      "product_id": "PROD002",
                      "name_ar": "منتج 2",
                      "name_en": "Product 2",
                      "quantity": 1
                    }
                  ],
                  "delivery_info": {
                    "address": "123 Main St, Cairo",
                    "delivery_time": "2025-11-09T18:00:00+02:00"
                  },
                  "events": [
                    {
                      "status": "pending",
                      "timestamp": "2025-11-13T10:29:39.946Z"
                    },
                    {
                      "status": "pending",
                      "timestamp": "2025-11-13T10:43:04.429Z"
                    }
                  ],
                  "store": {
                    "name_ar": "متجر تجريبي",
                    "name_en": "Demo Store"
                  },
                  "created_at": "2025-11-09T13:00:00Z",
                  "updated_at": "2025-11-13T10:43:04.429Z"
                }
              }
            }
          }
        }
      }
    }
  }
}
```
Get Available Tries

# Get Available Tries

Retrieve the number of available tries, total tries used, remaining tries, and additional tries information for a mobile user.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-profiles/available-tries": {
      "get": {
        "tags": [
          "Rewards"
        ],
        "summary": "Get Available Tries",
        "description": "Retrieve the number of available tries, total tries used, remaining tries, and additional tries information for a mobile user.",
        "operationId": "getAvailableTries",
        "parameters": [
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json, text/plain, */*"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "description": "Bearer token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "description": "Miniapp API key.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved available tries.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "available_tries": {
                          "type": "integer",
                          "example": 3
                        },
                        "total_tries_used": {
                          "type": "integer",
                          "example": 0
                        },
                        "total_tries_remaining": {
                          "type": "integer",
                          "example": -1
                        },
                        "period_tries_used": {
                          "type": "integer",
                          "example": 0
                        },
                        "period_tries_remaining": {
                          "type": "integer",
                          "example": 3
                        },
                        "additional_tries_currency_balance": {
                          "type": "number",
                          "format": "float",
                          "example": 85
                        },
                        "additional_tries_total": {
                          "type": "integer",
                          "example": 0
                        },
                        "additional_tries_remaining": {
                          "type": "integer",
                          "example": 0
                        },
                        "last_reset_date": {
                          "type": "string",
                          "format": "date",
                          "example": "2025-10-23T00:00:00"
                        },
                        "next_reset_date": {
                          "type": "string",
                          "format": "date",
                          "example": "2025-10-24T00:00:00"
                        },
                        "budget_limit_reached": {
                          "type": "boolean",
                          "example": false
                        },
                        "hide_timer": {
                          "type": "boolean",
                          "example": false
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or missing token."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-profiles/available-tries": {
      "get": {
        "tags": [
          "Rewards"
        ],
        "summary": "Get Available Tries",
        "description": "Retrieve the number of available tries, total tries used, remaining tries, and additional tries information for a mobile user.",
        "operationId": "getAvailableTries",
        "parameters": [
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json, text/plain, */*"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "description": "Bearer token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "description": "Miniapp API key.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved available tries.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "available_tries": {
                          "type": "integer",
                          "example": 3
                        },
                        "total_tries_used": {
                          "type": "integer",
                          "example": 0
                        },
                        "total_tries_remaining": {
                          "type": "integer",
                          "example": -1
                        },
                        "period_tries_used": {
                          "type": "integer",
                          "example": 0
                        },
                        "period_tries_remaining": {
                          "type": "integer",
                          "example": 3
                        },
                        "additional_tries_currency_balance": {
                          "type": "number",
                          "format": "float",
                          "example": 85
                        },
                        "additional_tries_total": {
                          "type": "integer",
                          "example": 0
                        },
                        "additional_tries_remaining": {
                          "type": "integer",
                          "example": 0
                        },
                        "last_reset_date": {
                          "type": "string",
                          "format": "date",
                          "example": "2025-10-23T00:00:00"
                        },
                        "next_reset_date": {
                          "type": "string",
                          "format": "date",
                          "example": "2025-10-24T00:00:00"
                        },
                        "budget_limit_reached": {
                          "type": "boolean",
                          "example": false
                        },
                        "hide_timer": {
                          "type": "boolean",
                          "example": false
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or missing token."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```
Get Available Rewards

# Get Available Rewards

Retrieve the list of available rewards, including earned, remaining, and period rewards for a mobile user.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-profiles/available-rewards": {
      "get": {
        "tags": [
          "Rewards"
        ],
        "summary": "Get Available Rewards",
        "description": "Retrieve the list of available rewards, including earned, remaining, and period rewards for a mobile user.",
        "operationId": "getAvailableRewards",
        "parameters": [
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json, text/plain, */*"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "description": "Bearer token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "description": "Miniapp API key.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved available rewards.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "available_rewards": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "miniapp_reward_id": {
                                "type": "integer",
                                "example": 4
                              },
                              "miniapp_reward_external_id": {
                                "type": "string",
                                "example": "55555"
                              },
                              "miniapp_reward_budget": {
                                "type": "number",
                                "format": "float",
                                "example": 1
                              },
                              "miniapp_reward_total_earned": {
                                "type": "number",
                                "format": "float",
                                "example": 1
                              },
                              "reward_type": {
                                "type": "string",
                                "example": "coupon"
                              },
                              "is_active": {
                                "type": "boolean",
                                "example": false
                              },
                              "available_reward": {
                                "type": "number",
                                "format": "float",
                                "example": 0
                              },
                              "total_reward_earned": {
                                "type": "number",
                                "format": "float",
                                "example": 0
                              },
                              "total_reward_remaining": {
                                "type": "number",
                                "format": "float",
                                "example": 0
                              },
                              "user_reward_limit": {
                                "type": "number",
                                "format": "float",
                                "example": -1
                              },
                              "period_reward_earned": {
                                "type": "number",
                                "format": "float",
                                "example": 0
                              },
                              "period_reward_remaining": {
                                "type": "number",
                                "format": "float",
                                "example": 0
                              },
                              "last_reset_date": {
                                "type": "string",
                                "format": "date",
                                "nullable": true,
                                "example": null
                              },
                              "next_reset_date": {
                                "type": "string",
                                "format": "date",
                                "nullable": true,
                                "example": null
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or missing token."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-profiles/available-rewards": {
      "get": {
        "tags": [
          "Rewards"
        ],
        "summary": "Get Available Rewards",
        "description": "Retrieve the list of available rewards, including earned, remaining, and period rewards for a mobile user.",
        "operationId": "getAvailableRewards",
        "parameters": [
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json, text/plain, */*"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "description": "Bearer token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "description": "Miniapp API key.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved available rewards.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "available_rewards": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "miniapp_reward_id": {
                                "type": "integer",
                                "example": 4
                              },
                              "miniapp_reward_external_id": {
                                "type": "string",
                                "example": "55555"
                              },
                              "miniapp_reward_budget": {
                                "type": "number",
                                "format": "float",
                                "example": 1
                              },
                              "miniapp_reward_total_earned": {
                                "type": "number",
                                "format": "float",
                                "example": 1
                              },
                              "reward_type": {
                                "type": "string",
                                "example": "coupon"
                              },
                              "is_active": {
                                "type": "boolean",
                                "example": false
                              },
                              "available_reward": {
                                "type": "number",
                                "format": "float",
                                "example": 0
                              },
                              "total_reward_earned": {
                                "type": "number",
                                "format": "float",
                                "example": 0
                              },
                              "total_reward_remaining": {
                                "type": "number",
                                "format": "float",
                                "example": 0
                              },
                              "user_reward_limit": {
                                "type": "number",
                                "format": "float",
                                "example": -1
                              },
                              "period_reward_earned": {
                                "type": "number",
                                "format": "float",
                                "example": 0
                              },
                              "period_reward_remaining": {
                                "type": "number",
                                "format": "float",
                                "example": 0
                              },
                              "last_reset_date": {
                                "type": "string",
                                "format": "date",
                                "nullable": true,
                                "example": null
                              },
                              "next_reset_date": {
                                "type": "string",
                                "format": "date",
                                "nullable": true,
                                "example": null
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or missing token."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```
Get User Rewards

# Get User Rewards

Retrieve the list of rewards for a mobile user, including details like value, type, and descriptions.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-rewards/user-rewards": {
      "get": {
        "tags": [
          "Rewards"
        ],
        "summary": "Get User Rewards",
        "description": "Retrieve the list of rewards for a mobile user, including details like value, type, and descriptions.",
        "operationId": "getUserRewards",
        "parameters": [
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json, text/plain, */*"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "description": "Bearer token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "description": "Miniapp API key.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved user rewards.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "items": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 13
                              },
                              "mobile_user_id": {
                                "type": "integer",
                                "example": 5
                              },
                              "miniapp_id": {
                                "type": "integer",
                                "example": 2
                              },
                              "miniapp_reward_id": {
                                "type": "integer",
                                "example": 2
                              },
                              "reward_type": {
                                "type": "string",
                                "example": "currency"
                              },
                              "value": {
                                "type": "number",
                                "format": "float",
                                "example": 2.2
                              },
                              "description_en": {
                                "type": "string",
                                "example": "English description"
                              },
                              "description_ar": {
                                "type": "string",
                                "example": "Arabic description"
                              },
                              "created_on_external_sys": {
                                "type": "boolean",
                                "example": true
                              },
                              "created_at": {
                                "type": "string",
                                "format": "date-time",
                                "example": "2025-10-20T11:07:56.252802+00:00"
                              },
                              "updated_at": {
                                "type": "string",
                                "format": "date-time",
                                "example": "2025-10-20T11:08:02.984152+00:00"
                              }
                            }
                          }
                        },
                        "total": {
                          "type": "integer",
                          "example": 7
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or missing token."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-rewards/user-rewards": {
      "get": {
        "tags": [
          "Rewards"
        ],
        "summary": "Get User Rewards",
        "description": "Retrieve the list of rewards for a mobile user, including details like value, type, and descriptions.",
        "operationId": "getUserRewards",
        "parameters": [
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json, text/plain, */*"
            }
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "description": "Bearer token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "description": "Miniapp API key.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved user rewards.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "items": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 13
                              },
                              "mobile_user_id": {
                                "type": "integer",
                                "example": 5
                              },
                              "miniapp_id": {
                                "type": "integer",
                                "example": 2
                              },
                              "miniapp_reward_id": {
                                "type": "integer",
                                "example": 2
                              },
                              "reward_type": {
                                "type": "string",
                                "example": "currency"
                              },
                              "value": {
                                "type": "number",
                                "format": "float",
                                "example": 2.2
                              },
                              "description_en": {
                                "type": "string",
                                "example": "English description"
                              },
                              "description_ar": {
                                "type": "string",
                                "example": "Arabic description"
                              },
                              "created_on_external_sys": {
                                "type": "boolean",
                                "example": true
                              },
                              "created_at": {
                                "type": "string",
                                "format": "date-time",
                                "example": "2025-10-20T11:07:56.252802+00:00"
                              },
                              "updated_at": {
                                "type": "string",
                                "format": "date-time",
                                "example": "2025-10-20T11:08:02.984152+00:00"
                              }
                            }
                          }
                        },
                        "total": {
                          "type": "integer",
                          "example": 7
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or missing token."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```
Log User Activity

# Log User Activity

Records a user activity and returns the current available tries and limits.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-activities/user-activity-logs": {
      "post": {
        "tags": [
          "Rewards"
        ],
        "summary": "Log User Activity",
        "description": "Records a user activity and returns the current available tries and limits.",
        "operationId": "logUserActivity",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "activity_type": {
                    "type": "string",
                    "example": "opened_app",
                    "description": "Type of activity performed by the user."
                  },
                  "description_en": {
                    "type": "string",
                    "example": "English description"
                  },
                  "description_ar": {
                    "type": "string",
                    "example": "Arabic description"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "miniapp-user-token",
            "in": "header",
            "description": "Bearer token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "description": "Miniapp API key.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Activity successfully recorded.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 201
                    },
                    "result": {
                      "type": "string",
                      "example": "Created Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "available_tries": {
                          "type": "integer",
                          "example": 3
                        },
                        "total_tries_used": {
                          "type": "integer",
                          "example": 0
                        },
                        "total_tries_remaining": {
                          "type": "integer",
                          "example": -1
                        },
                        "period_tries_used": {
                          "type": "integer",
                          "example": 0
                        },
                        "period_tries_remaining": {
                          "type": "integer",
                          "example": 3
                        },
                        "additional_tries_currency_balance": {
                          "type": "number",
                          "format": "float",
                          "example": 85
                        },
                        "additional_tries_total": {
                          "type": "integer",
                          "example": 0
                        },
                        "additional_tries_remaining": {
                          "type": "integer",
                          "example": 0
                        },
                        "last_reset_date": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-23T00:00:00"
                        },
                        "next_reset_date": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-24T00:00:00"
                        },
                        "budget_limit_reached": {
                          "type": "boolean",
                          "example": false
                        },
                        "hide_timer": {
                          "type": "boolean",
                          "example": false
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or missing token."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-activities/user-activity-logs": {
      "post": {
        "tags": [
          "Rewards"
        ],
        "summary": "Log User Activity",
        "description": "Records a user activity and returns the current available tries and limits.",
        "operationId": "logUserActivity",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "activity_type": {
                    "type": "string",
                    "example": "opened_app",
                    "description": "Type of activity performed by the user."
                  },
                  "description_en": {
                    "type": "string",
                    "example": "English description"
                  },
                  "description_ar": {
                    "type": "string",
                    "example": "Arabic description"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "miniapp-user-token",
            "in": "header",
            "description": "Bearer token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "description": "Miniapp API key.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Activity successfully recorded.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 201
                    },
                    "result": {
                      "type": "string",
                      "example": "Created Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "available_tries": {
                          "type": "integer",
                          "example": 3
                        },
                        "total_tries_used": {
                          "type": "integer",
                          "example": 0
                        },
                        "total_tries_remaining": {
                          "type": "integer",
                          "example": -1
                        },
                        "period_tries_used": {
                          "type": "integer",
                          "example": 0
                        },
                        "period_tries_remaining": {
                          "type": "integer",
                          "example": 3
                        },
                        "additional_tries_currency_balance": {
                          "type": "number",
                          "format": "float",
                          "example": 85
                        },
                        "additional_tries_total": {
                          "type": "integer",
                          "example": 0
                        },
                        "additional_tries_remaining": {
                          "type": "integer",
                          "example": 0
                        },
                        "last_reset_date": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-23T00:00:00"
                        },
                        "next_reset_date": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-24T00:00:00"
                        },
                        "budget_limit_reached": {
                          "type": "boolean",
                          "example": false
                        },
                        "hide_timer": {
                          "type": "boolean",
                          "example": false
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or missing token."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```
Register User Reward

# Register User Reward

Assign a reward to a mobile user with specified value and description.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-rewards/register-user-reward": {
      "post": {
        "tags": [
          "Rewards"
        ],
        "summary": "Register User Reward",
        "description": "Assign a reward to a mobile user with specified value and description.",
        "operationId": "registerUserReward",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "miniapp_reward_id": {
                    "type": "integer",
                    "example": 2,
                    "description": "ID of the reward to assign."
                  },
                  "value": {
                    "type": "number",
                    "format": "float",
                    "example": 2.2,
                    "description": "Value of the reward."
                  },
                  "description_en": {
                    "type": "string",
                    "example": "English description"
                  },
                  "description_ar": {
                    "type": "string",
                    "example": "Arabic description"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "miniapp-user-token",
            "in": "header",
            "description": "Bearer token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "description": "Miniapp API key.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Reward successfully created.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 201
                    },
                    "result": {
                      "type": "string",
                      "example": "Created Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 26
                        },
                        "mobile_user_id": {
                          "type": "integer",
                          "example": 5
                        },
                        "miniapp_id": {
                          "type": "integer",
                          "example": 2
                        },
                        "miniapp_reward_id": {
                          "type": "integer",
                          "example": 2
                        },
                        "reward_type": {
                          "type": "string",
                          "example": "currency"
                        },
                        "value": {
                          "type": "number",
                          "format": "float",
                          "example": 2.2
                        },
                        "description_en": {
                          "type": "string",
                          "example": "English description"
                        },
                        "description_ar": {
                          "type": "string",
                          "example": "Arabic description"
                        },
                        "created_on_external_sys": {
                          "type": "boolean",
                          "example": true
                        },
                        "created_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-23T10:33:58.167775+00:00"
                        },
                        "updated_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-23T10:34:07.447519+00:00"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or missing token."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v2/mobile-user-rewards/register-user-reward": {
      "post": {
        "tags": [
          "Rewards"
        ],
        "summary": "Register User Reward",
        "description": "Assign a reward to a mobile user with specified value and description.",
        "operationId": "registerUserReward",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "miniapp_reward_id": {
                    "type": "integer",
                    "example": 2,
                    "description": "ID of the reward to assign."
                  },
                  "value": {
                    "type": "number",
                    "format": "float",
                    "example": 2.2,
                    "description": "Value of the reward."
                  },
                  "description_en": {
                    "type": "string",
                    "example": "English description"
                  },
                  "description_ar": {
                    "type": "string",
                    "example": "Arabic description"
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "miniapp-user-token",
            "in": "header",
            "description": "Bearer token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "description": "Miniapp API key.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Reward successfully created.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 201
                    },
                    "result": {
                      "type": "string",
                      "example": "Created Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "example": 26
                        },
                        "mobile_user_id": {
                          "type": "integer",
                          "example": 5
                        },
                        "miniapp_id": {
                          "type": "integer",
                          "example": 2
                        },
                        "miniapp_reward_id": {
                          "type": "integer",
                          "example": 2
                        },
                        "reward_type": {
                          "type": "string",
                          "example": "currency"
                        },
                        "value": {
                          "type": "number",
                          "format": "float",
                          "example": 2.2
                        },
                        "description_en": {
                          "type": "string",
                          "example": "English description"
                        },
                        "description_ar": {
                          "type": "string",
                          "example": "Arabic description"
                        },
                        "created_on_external_sys": {
                          "type": "boolean",
                          "example": true
                        },
                        "created_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-23T10:33:58.167775+00:00"
                        },
                        "updated_at": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2025-10-23T10:34:07.447519+00:00"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or missing token."
          },
          "500": {
            "description": "Internal Server Error."
          }
        }
      }
    }
  }
}
```
Get Rewards History

# Get Rewards History

Retrieves the history of rewards earned by a mobile user, including reward details such as type, value, and timestamp.


# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v1/mobile-user-profiles/rewards-history": {
      "get": {
        "tags": [
          "Rewards"
        ],
        "summary": "Get Rewards History",
        "description": "Retrieves the history of rewards earned by a mobile user, including reward details such as type, value, and timestamp.\n",
        "operationId": "getRewardsHistory",
        "parameters": [
          {
            "name": "user_miniapp_token",
            "in": "query",
            "description": "The Miniapp JWT token representing the miniapp user.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json"
            }
          },
          {
            "name": "Authorization",
            "in": "header",
            "description": "Bearer App token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzMyOTYwNDMsImV4cCI6MTc2NDgzMjA0MywibWluaWFwcF9leHRlcm5hbF9pZCI6ImNvLm5hbmEuY2FtZWxmbGlnaHQuc3RhZ2luZyIsIm1pbmlhcHBfaWQiOjIsInR5cGUiOiJnYW1lcyIsInBlcm1pc3Npb25zIjpbXX0.h1arZuth2_jfRD8IK5qxdm7oSlcBBL8veZZ-V7Gpg7I"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved the user's rewards history.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "total_earnings": {
                          "type": "number",
                          "format": "float",
                          "description": "Total accumulated rewards value.",
                          "example": 0.5
                        },
                        "rewards": {
                          "type": "array",
                          "description": "List of individual reward transactions.",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 2
                              },
                              "miniapp_reward_id": {
                                "type": "integer",
                                "example": 2
                              },
                              "reward_type": {
                                "type": "string",
                                "enum": [
                                  "currency",
                                  "coupon"
                                ],
                                "example": "currency"
                              },
                              "value": {
                                "type": "number",
                                "format": "float",
                                "example": 0.3
                              },
                              "description_en": {
                                "type": "string",
                                "example": "Collected 0.3 nana_cash_back(s)"
                              },
                              "description_ar": {
                                "type": "string",
                                "example": "تم جمع 0.3 nana_cash_back"
                              },
                              "created_at": {
                                "type": "string",
                                "format": "date-time",
                                "example": "2024-12-05T08:55:58.652202+00:00"
                              }
                            }
                          }
                        },
                        "total": {
                          "type": "integer",
                          "description": "Total number of reward records.",
                          "example": 2
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — missing or invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or expired token."
          },
          "500": {
            "description": "Internal Server Error — something went wrong on the server."
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Rewards",
      "description": "Endpoints related to user rewards and their status."
    }
  ],
  "paths": {
    "/api/v1/mobile-user-profiles/rewards-history": {
      "get": {
        "tags": [
          "Rewards"
        ],
        "summary": "Get Rewards History",
        "description": "Retrieves the history of rewards earned by a mobile user, including reward details such as type, value, and timestamp.\n",
        "operationId": "getRewardsHistory",
        "parameters": [
          {
            "name": "user_miniapp_token",
            "in": "query",
            "description": "The Miniapp JWT token representing the miniapp user.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjAzMzgxMzEsImV4cCI6NDM1MjM0MTczMSwidXNlcl9pZCI6NX0.Pe93Xtp3D3OR8aIiBTxopg1SKH_J9NgOkSidhic0fy4"
            }
          },
          {
            "name": "Accept",
            "in": "header",
            "schema": {
              "type": "string",
              "default": "application/json"
            }
          },
          {
            "name": "Authorization",
            "in": "header",
            "description": "Bearer App token for authentication.",
            "required": true,
            "schema": {
              "type": "string",
              "example": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzMyOTYwNDMsImV4cCI6MTc2NDgzMjA0MywibWluaWFwcF9leHRlcm5hbF9pZCI6ImNvLm5hbmEuY2FtZWxmbGlnaHQuc3RhZ2luZyIsIm1pbmlhcHBfaWQiOjIsInR5cGUiOiJnYW1lcyIsInBlcm1pc3Npb25zIjpbXX0.h1arZuth2_jfRD8IK5qxdm7oSlcBBL8veZZ-V7Gpg7I"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successfully retrieved the user's rewards history.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status_code": {
                      "type": "integer",
                      "example": 200
                    },
                    "result": {
                      "type": "string",
                      "example": "Operation Completed Successfully"
                    },
                    "success": {
                      "type": "boolean",
                      "example": true
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "total_earnings": {
                          "type": "number",
                          "format": "float",
                          "description": "Total accumulated rewards value.",
                          "example": 0.5
                        },
                        "rewards": {
                          "type": "array",
                          "description": "List of individual reward transactions.",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "integer",
                                "example": 2
                              },
                              "miniapp_reward_id": {
                                "type": "integer",
                                "example": 2
                              },
                              "reward_type": {
                                "type": "string",
                                "enum": [
                                  "currency",
                                  "coupon"
                                ],
                                "example": "currency"
                              },
                              "value": {
                                "type": "number",
                                "format": "float",
                                "example": 0.3
                              },
                              "description_en": {
                                "type": "string",
                                "example": "Collected 0.3 nana_cash_back(s)"
                              },
                              "description_ar": {
                                "type": "string",
                                "example": "تم جمع 0.3 nana_cash_back"
                              },
                              "created_at": {
                                "type": "string",
                                "format": "date-time",
                                "example": "2024-12-05T08:55:58.652202+00:00"
                              }
                            }
                          }
                        },
                        "total": {
                          "type": "integer",
                          "description": "Total number of reward records.",
                          "example": 2
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request — missing or invalid parameters."
          },
          "401": {
            "description": "Unauthorized — invalid or expired token."
          },
          "500": {
            "description": "Internal Server Error — something went wrong on the server."
          }
        }
      }
    }
  }
}
```
Track shipment

# Track shipment

Returns shipment tracking details including pickup, customer, and rider locations.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Shipments",
      "description": "User Shipments"
    }
  ],
  "paths": {
    "/api/v2/shipment/{shipment_id}/track": {
      "get": {
        "tags": [
          "Shipments"
        ],
        "summary": "Track shipment",
        "description": "Returns shipment tracking details including pickup, customer, and rider locations.",
        "operationId": "trackShipment",
        "parameters": [
          {
            "name": "shipment_id",
            "in": "path",
            "required": true,
            "description": "Shipment unique identifier.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "MiniApp user authentication token.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "MiniApp API key.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "Accept-Language",
            "in": "header",
            "required": false,
            "description": "Response language.",
            "schema": {
              "type": "string"
            },
            "example": "en"
          },
          {
            "name": "accept",
            "in": "header",
            "required": false,
            "description": "Expected response media type.",
            "schema": {
              "type": "string"
            },
            "example": "application/json"
          }
        ],
        "responses": {
          "200": {
            "description": "Shipment tracking details.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "track_id",
                    "pickuplocation",
                    "customerlocation"
                  ],
                  "properties": {
                    "track_id": {
                      "type": "string",
                      "description": "Tracking identifier."
                    },
                    "mobile": {
                      "type": "string",
                      "nullable": true,
                      "description": "Rider mobile number."
                    },
                    "ridername": {
                      "type": "string",
                      "nullable": true,
                      "description": "Rider name."
                    },
                    "pickuplocation": {
                      "type": "object",
                      "required": [
                        "latitude",
                        "longitude"
                      ],
                      "properties": {
                        "latitude": {
                          "type": "number",
                          "format": "float"
                        },
                        "longitude": {
                          "type": "number",
                          "format": "float"
                        }
                      }
                    },
                    "customerlocation": {
                      "type": "object",
                      "required": [
                        "latitude",
                        "longitude"
                      ],
                      "properties": {
                        "latitude": {
                          "type": "number",
                          "format": "float"
                        },
                        "longitude": {
                          "type": "number",
                          "format": "float"
                        }
                      }
                    },
                    "riderlastlocation": {
                      "type": "object",
                      "nullable": true,
                      "required": [
                        "latitude",
                        "longitude",
                        "lastlocationupdate"
                      ],
                      "properties": {
                        "latitude": {
                          "type": "number",
                          "format": "float"
                        },
                        "longitude": {
                          "type": "number",
                          "format": "float"
                        },
                        "lastlocationupdate": {
                          "type": "string",
                          "format": "date-time",
                          "description": "Timestamp of last rider location update."
                        }
                      }
                    }
                  }
                },
                "example": {
                  "track_id": "trk_123",
                  "mobile": "966500000000",
                  "ridername": "Ahmed Ali",
                  "pickuplocation": {
                    "latitude": 24.7136,
                    "longitude": 46.6753
                  },
                  "customerlocation": {
                    "latitude": 24.7743,
                    "longitude": 46.7386
                  },
                  "riderlastlocation": {
                    "latitude": 24.72,
                    "longitude": 46.68,
                    "lastlocationupdate": "2025-01-01T12:30:00Z"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Invalid request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Invalid shipment ID"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Unauthorized"
                }
              }
            }
          },
          "404": {
            "description": "Shipment not found.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Shipment not found"
                }
              }
            }
          },
          "500": {
            "description": "Internal server error.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Internal server error"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Shipments",
      "description": "User Shipments"
    }
  ],
  "paths": {
    "/api/v2/shipment/{shipment_id}/track": {
      "get": {
        "tags": [
          "Shipments"
        ],
        "summary": "Track shipment",
        "description": "Returns shipment tracking details including pickup, customer, and rider locations.",
        "operationId": "trackShipment",
        "parameters": [
          {
            "name": "shipment_id",
            "in": "path",
            "required": true,
            "description": "Shipment unique identifier.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "MiniApp user authentication token.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "MiniApp API key.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "Accept-Language",
            "in": "header",
            "required": false,
            "description": "Response language.",
            "schema": {
              "type": "string"
            },
            "example": "en"
          },
          {
            "name": "accept",
            "in": "header",
            "required": false,
            "description": "Expected response media type.",
            "schema": {
              "type": "string"
            },
            "example": "application/json"
          }
        ],
        "responses": {
          "200": {
            "description": "Shipment tracking details.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "track_id",
                    "pickuplocation",
                    "customerlocation"
                  ],
                  "properties": {
                    "track_id": {
                      "type": "string",
                      "description": "Tracking identifier."
                    },
                    "mobile": {
                      "type": "string",
                      "nullable": true,
                      "description": "Rider mobile number."
                    },
                    "ridername": {
                      "type": "string",
                      "nullable": true,
                      "description": "Rider name."
                    },
                    "pickuplocation": {
                      "type": "object",
                      "required": [
                        "latitude",
                        "longitude"
                      ],
                      "properties": {
                        "latitude": {
                          "type": "number",
                          "format": "float"
                        },
                        "longitude": {
                          "type": "number",
                          "format": "float"
                        }
                      }
                    },
                    "customerlocation": {
                      "type": "object",
                      "required": [
                        "latitude",
                        "longitude"
                      ],
                      "properties": {
                        "latitude": {
                          "type": "number",
                          "format": "float"
                        },
                        "longitude": {
                          "type": "number",
                          "format": "float"
                        }
                      }
                    },
                    "riderlastlocation": {
                      "type": "object",
                      "nullable": true,
                      "required": [
                        "latitude",
                        "longitude",
                        "lastlocationupdate"
                      ],
                      "properties": {
                        "latitude": {
                          "type": "number",
                          "format": "float"
                        },
                        "longitude": {
                          "type": "number",
                          "format": "float"
                        },
                        "lastlocationupdate": {
                          "type": "string",
                          "format": "date-time",
                          "description": "Timestamp of last rider location update."
                        }
                      }
                    }
                  }
                },
                "example": {
                  "track_id": "trk_123",
                  "mobile": "966500000000",
                  "ridername": "Ahmed Ali",
                  "pickuplocation": {
                    "latitude": 24.7136,
                    "longitude": 46.6753
                  },
                  "customerlocation": {
                    "latitude": 24.7743,
                    "longitude": 46.7386
                  },
                  "riderlastlocation": {
                    "latitude": 24.72,
                    "longitude": 46.68,
                    "lastlocationupdate": "2025-01-01T12:30:00Z"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Invalid request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Invalid shipment ID"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Unauthorized"
                }
              }
            }
          },
          "404": {
            "description": "Shipment not found.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Shipment not found"
                }
              }
            }
          },
          "500": {
            "description": "Internal server error.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Internal server error"
                }
              }
            }
          }
        }
      }
    }
  }
}
```
Get shipment details

# Get shipment details

Returns full shipment details including status, customer, and items.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Shipments",
      "description": "User Shipments"
    }
  ],
  "paths": {
    "/api/v2/shipment/{shipment_id}/details": {
      "get": {
        "tags": [
          "Shipments"
        ],
        "summary": "Get shipment details",
        "description": "Returns full shipment details including status, customer, and items.",
        "operationId": "getShipmentDetails",
        "parameters": [
          {
            "name": "shipment_id",
            "in": "path",
            "required": true,
            "description": "Shipment unique identifier.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "MiniApp user authentication token.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "MiniApp API key.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "Accept-Language",
            "in": "header",
            "required": false,
            "description": "Response language.",
            "schema": {
              "type": "string"
            },
            "example": "en"
          },
          {
            "name": "accept",
            "in": "header",
            "required": false,
            "description": "Expected response media type.",
            "schema": {
              "type": "string"
            },
            "example": "application/json"
          }
        ],
        "responses": {
          "200": {
            "description": "Shipment details retrieved successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "status",
                    "ID",
                    "total",
                    "customer",
                    "item"
                  ],
                  "properties": {
                    "status": {
                      "type": "string",
                      "description": "Current shipment status."
                    },
                    "ID": {
                      "type": "string",
                      "description": "Shipment identifier."
                    },
                    "note": {
                      "type": "string",
                      "description": "Shipment note."
                    },
                    "total": {
                      "type": "number",
                      "format": "float",
                      "description": "Total shipment amount."
                    },
                    "customer": {
                      "type": "object",
                      "required": [
                        "ID",
                        "Name",
                        "Mobile",
                        "Address"
                      ],
                      "properties": {
                        "ID": {
                          "type": "string"
                        },
                        "Name": {
                          "type": "string"
                        },
                        "Mobile": {
                          "type": "string"
                        },
                        "Address": {
                          "type": "object",
                          "properties": {
                            "Latitude": {
                              "type": "number",
                              "format": "float",
                              "nullable": true
                            },
                            "Longitude": {
                              "type": "number",
                              "format": "float",
                              "nullable": true
                            },
                            "District": {
                              "type": "string",
                              "nullable": true
                            },
                            "Street": {
                              "type": "string",
                              "nullable": true
                            },
                            "Building": {
                              "type": "string",
                              "nullable": true
                            },
                            "Floor": {
                              "type": "string",
                              "nullable": true
                            },
                            "Apartment": {
                              "type": "string",
                              "nullable": true
                            },
                            "Landmark": {
                              "type": "string",
                              "nullable": true
                            },
                            "Note": {
                              "type": "string",
                              "nullable": true
                            },
                            "DeliveryZoneName": {
                              "type": "string",
                              "nullable": true
                            },
                            "CustomerDoorImageURL": {
                              "type": "string",
                              "nullable": true
                            }
                          }
                        },
                        "Note": {
                          "type": "string",
                          "nullable": true
                        },
                        "WhatsAppNumber": {
                          "type": "string",
                          "nullable": true
                        }
                      }
                    },
                    "item": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "ProductID",
                          "ProductName",
                          "UnitPrice",
                          "Quantity",
                          "Stock"
                        ],
                        "properties": {
                          "ID": {
                            "type": "string",
                            "nullable": true
                          },
                          "ProductID": {
                            "type": "string"
                          },
                          "ProductName": {
                            "type": "string"
                          },
                          "UnitPrice": {
                            "type": "number",
                            "format": "float"
                          },
                          "Quantity": {
                            "type": "number",
                            "format": "float"
                          },
                          "Stock": {
                            "type": "number",
                            "format": "float"
                          },
                          "ImageURL": {
                            "type": "string",
                            "nullable": true
                          },
                          "Note": {
                            "type": "string",
                            "nullable": true
                          },
                          "IsTopPriority": {
                            "type": "boolean",
                            "nullable": true
                          },
                          "Barcode": {
                            "type": "string",
                            "nullable": true
                          }
                        }
                      }
                    }
                  }
                },
                "example": {
                  "status": "delivered",
                  "ID": "shp_123",
                  "note": "Leave at the door",
                  "total": 150.75,
                  "customer": {
                    "ID": "cust_1",
                    "Name": "John Doe",
                    "Mobile": "966500000000",
                    "Address": {
                      "Latitude": 24.7136,
                      "Longitude": 46.6753,
                      "District": "Olaya",
                      "Street": "King Fahd Rd",
                      "Building": "12",
                      "Floor": "3",
                      "Apartment": "301",
                      "Landmark": "Near Mall",
                      "Note": "",
                      "DeliveryZoneName": "Riyadh Central",
                      "CustomerDoorImageURL": "https://example.com/door.jpg"
                    },
                    "Note": "",
                    "WhatsAppNumber": "966500000000"
                  },
                  "item": [
                    {
                      "ID": "itm_1",
                      "ProductID": "prd_1",
                      "ProductName": "Product A",
                      "UnitPrice": 50.25,
                      "Quantity": 2,
                      "Stock": 10,
                      "ImageURL": "https://example.com/product.jpg",
                      "Note": "",
                      "IsTopPriority": false,
                      "Barcode": "123456789"
                    }
                  ]
                }
              }
            }
          },
          "400": {
            "description": "Invalid request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Invalid shipment ID"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Unauthorized"
                }
              }
            }
          },
          "404": {
            "description": "Shipment not found.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Shipment not found"
                }
              }
            }
          },
          "500": {
            "description": "Internal server error.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Internal server error"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Shipments",
      "description": "User Shipments"
    }
  ],
  "paths": {
    "/api/v2/shipment/{shipment_id}/details": {
      "get": {
        "tags": [
          "Shipments"
        ],
        "summary": "Get shipment details",
        "description": "Returns full shipment details including status, customer, and items.",
        "operationId": "getShipmentDetails",
        "parameters": [
          {
            "name": "shipment_id",
            "in": "path",
            "required": true,
            "description": "Shipment unique identifier.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "MiniApp user authentication token.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "MiniApp API key.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "Accept-Language",
            "in": "header",
            "required": false,
            "description": "Response language.",
            "schema": {
              "type": "string"
            },
            "example": "en"
          },
          {
            "name": "accept",
            "in": "header",
            "required": false,
            "description": "Expected response media type.",
            "schema": {
              "type": "string"
            },
            "example": "application/json"
          }
        ],
        "responses": {
          "200": {
            "description": "Shipment details retrieved successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "status",
                    "ID",
                    "total",
                    "customer",
                    "item"
                  ],
                  "properties": {
                    "status": {
                      "type": "string",
                      "description": "Current shipment status."
                    },
                    "ID": {
                      "type": "string",
                      "description": "Shipment identifier."
                    },
                    "note": {
                      "type": "string",
                      "description": "Shipment note."
                    },
                    "total": {
                      "type": "number",
                      "format": "float",
                      "description": "Total shipment amount."
                    },
                    "customer": {
                      "type": "object",
                      "required": [
                        "ID",
                        "Name",
                        "Mobile",
                        "Address"
                      ],
                      "properties": {
                        "ID": {
                          "type": "string"
                        },
                        "Name": {
                          "type": "string"
                        },
                        "Mobile": {
                          "type": "string"
                        },
                        "Address": {
                          "type": "object",
                          "properties": {
                            "Latitude": {
                              "type": "number",
                              "format": "float",
                              "nullable": true
                            },
                            "Longitude": {
                              "type": "number",
                              "format": "float",
                              "nullable": true
                            },
                            "District": {
                              "type": "string",
                              "nullable": true
                            },
                            "Street": {
                              "type": "string",
                              "nullable": true
                            },
                            "Building": {
                              "type": "string",
                              "nullable": true
                            },
                            "Floor": {
                              "type": "string",
                              "nullable": true
                            },
                            "Apartment": {
                              "type": "string",
                              "nullable": true
                            },
                            "Landmark": {
                              "type": "string",
                              "nullable": true
                            },
                            "Note": {
                              "type": "string",
                              "nullable": true
                            },
                            "DeliveryZoneName": {
                              "type": "string",
                              "nullable": true
                            },
                            "CustomerDoorImageURL": {
                              "type": "string",
                              "nullable": true
                            }
                          }
                        },
                        "Note": {
                          "type": "string",
                          "nullable": true
                        },
                        "WhatsAppNumber": {
                          "type": "string",
                          "nullable": true
                        }
                      }
                    },
                    "item": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "ProductID",
                          "ProductName",
                          "UnitPrice",
                          "Quantity",
                          "Stock"
                        ],
                        "properties": {
                          "ID": {
                            "type": "string",
                            "nullable": true
                          },
                          "ProductID": {
                            "type": "string"
                          },
                          "ProductName": {
                            "type": "string"
                          },
                          "UnitPrice": {
                            "type": "number",
                            "format": "float"
                          },
                          "Quantity": {
                            "type": "number",
                            "format": "float"
                          },
                          "Stock": {
                            "type": "number",
                            "format": "float"
                          },
                          "ImageURL": {
                            "type": "string",
                            "nullable": true
                          },
                          "Note": {
                            "type": "string",
                            "nullable": true
                          },
                          "IsTopPriority": {
                            "type": "boolean",
                            "nullable": true
                          },
                          "Barcode": {
                            "type": "string",
                            "nullable": true
                          }
                        }
                      }
                    }
                  }
                },
                "example": {
                  "status": "delivered",
                  "ID": "shp_123",
                  "note": "Leave at the door",
                  "total": 150.75,
                  "customer": {
                    "ID": "cust_1",
                    "Name": "John Doe",
                    "Mobile": "966500000000",
                    "Address": {
                      "Latitude": 24.7136,
                      "Longitude": 46.6753,
                      "District": "Olaya",
                      "Street": "King Fahd Rd",
                      "Building": "12",
                      "Floor": "3",
                      "Apartment": "301",
                      "Landmark": "Near Mall",
                      "Note": "",
                      "DeliveryZoneName": "Riyadh Central",
                      "CustomerDoorImageURL": "https://example.com/door.jpg"
                    },
                    "Note": "",
                    "WhatsAppNumber": "966500000000"
                  },
                  "item": [
                    {
                      "ID": "itm_1",
                      "ProductID": "prd_1",
                      "ProductName": "Product A",
                      "UnitPrice": 50.25,
                      "Quantity": 2,
                      "Stock": 10,
                      "ImageURL": "https://example.com/product.jpg",
                      "Note": "",
                      "IsTopPriority": false,
                      "Barcode": "123456789"
                    }
                  ]
                }
              }
            }
          },
          "400": {
            "description": "Invalid request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Invalid shipment ID"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Unauthorized"
                }
              }
            }
          },
          "404": {
            "description": "Shipment not found.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Shipment not found"
                }
              }
            }
          },
          "500": {
            "description": "Internal server error.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Internal server error"
                }
              }
            }
          }
        }
      }
    }
  }
}
```
Cancel shipment

# Cancel shipment

Cancels an existing shipment by its identifier.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Shipments",
      "description": "User Shipments"
    }
  ],
  "paths": {
    "/api/v2/shipment/{shipment_id}/cancel": {
      "post": {
        "tags": [
          "Shipments"
        ],
        "summary": "Cancel shipment",
        "description": "Cancels an existing shipment by its identifier.",
        "operationId": "cancelShipment",
        "parameters": [
          {
            "name": "shipment_id",
            "in": "path",
            "required": true,
            "description": "Shipment unique identifier.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "MiniApp user authentication token.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "MiniApp API key.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "accept",
            "in": "header",
            "required": false,
            "description": "Expected response media type.",
            "schema": {
              "type": "string"
            },
            "example": "application/json"
          }
        ],
        "requestBody": {
          "required": false,
          "description": "This endpoint does not require a request body.",
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              },
              "example": {}
            }
          }
        },
        "responses": {
          "200": {
            "description": "Shipment cancelled successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "success": {
                      "type": "boolean"
                    },
                    "message": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "success": true,
                  "message": "Shipment cancelled successfully"
                }
              }
            }
          },
          "400": {
            "description": "Invalid cancellation request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Shipment cannot be cancelled"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Unauthorized"
                }
              }
            }
          },
          "404": {
            "description": "Shipment not found.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Shipment not found"
                }
              }
            }
          },
          "500": {
            "description": "Internal server error.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Internal server error"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Shipments",
      "description": "User Shipments"
    }
  ],
  "paths": {
    "/api/v2/shipment/{shipment_id}/cancel": {
      "post": {
        "tags": [
          "Shipments"
        ],
        "summary": "Cancel shipment",
        "description": "Cancels an existing shipment by its identifier.",
        "operationId": "cancelShipment",
        "parameters": [
          {
            "name": "shipment_id",
            "in": "path",
            "required": true,
            "description": "Shipment unique identifier.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "MiniApp user authentication token.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "MiniApp API key.",
            "schema": {
              "type": "string"
            },
            "example": "1"
          },
          {
            "name": "accept",
            "in": "header",
            "required": false,
            "description": "Expected response media type.",
            "schema": {
              "type": "string"
            },
            "example": "application/json"
          }
        ],
        "requestBody": {
          "required": false,
          "description": "This endpoint does not require a request body.",
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              },
              "example": {}
            }
          }
        },
        "responses": {
          "200": {
            "description": "Shipment cancelled successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "success": {
                      "type": "boolean"
                    },
                    "message": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "success": true,
                  "message": "Shipment cancelled successfully"
                }
              }
            }
          },
          "400": {
            "description": "Invalid cancellation request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Shipment cannot be cancelled"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Unauthorized"
                }
              }
            }
          },
          "404": {
            "description": "Shipment not found.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Shipment not found"
                }
              }
            }
          },
          "500": {
            "description": "Internal server error.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Internal server error"
                }
              }
            }
          }
        }
      }
    }
  }
}
```
Send notification

# Send notification

Sends a localized push notification to a specific user.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Notifications",
      "description": "User Notifications"
    }
  ],
  "paths": {
    "/api/v2/notification/send": {
      "post": {
        "tags": [
          "Notifications"
        ],
        "summary": "Send notification",
        "description": "Sends a localized push notification to a specific user.",
        "operationId": "sendNotification",
        "parameters": [
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "MiniApp user authentication token.",
            "schema": {
              "type": "string"
            },
            "example": "test"
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "MiniApp API key.",
            "schema": {
              "type": "string"
            },
            "example": "test"
          },
          {
            "name": "accept",
            "in": "header",
            "required": false,
            "description": "Expected response media type.",
            "schema": {
              "type": "string"
            },
            "example": "application/json"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "message"
                ],
                "properties": {
                  "message": {
                    "type": "object",
                    "required": [
                      "message_title_ar",
                      "message_body_ar",
                      "message_title_en",
                      "message_body_en"
                    ],
                    "properties": {
                      "message_title_ar": {
                        "type": "string",
                        "description": "Notification title in Arabic."
                      },
                      "message_body_ar": {
                        "type": "string",
                        "description": "Notification body in Arabic."
                      },
                      "message_title_en": {
                        "type": "string",
                        "description": "Notification title in English."
                      },
                      "message_body_en": {
                        "type": "string",
                        "description": "Notification body in English"
                      }
                    }
                  }
                }
              },
              "example": {
                "user_id": "string",
                "message": {
                  "message_title_ar": "string",
                  "message_body_ar": "string",
                  "message_title_en": "string",
                  "message_body_en": "string"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Notification sent successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "success": {
                      "type": "boolean",
                      "description": "Indicates whether the notification was sent successfully."
                    },
                    "message": {
                      "type": "string",
                      "description": "Success message."
                    }
                  }
                },
                "example": {
                  "success": true,
                  "message": "Notification sent successfully"
                }
              }
            }
          },
          "400": {
            "description": "Invalid request payload.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Invalid request data"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Unauthorized"
                }
              }
            }
          },
          "500": {
            "description": "Internal server error.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Internal server error"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

# OpenAPI definition
```json
{
  "_id": "/branches/1.0/apis/mini.yaml",
  "openapi": "3.0.3",
  "info": {
    "title": "MiniApps Developer Hub",
    "version": "1.0.0",
    "description": "APIs for MiniApps Flow."
  },
  "servers": [
    {
      "url": "https://miniapps.nana.systems"
    },
    {
      "url": "https://activity-service.nana.systems"
    }
  ],
  "tags": [
    {
      "name": "Notifications",
      "description": "User Notifications"
    }
  ],
  "paths": {
    "/api/v2/notification/send": {
      "post": {
        "tags": [
          "Notifications"
        ],
        "summary": "Send notification",
        "description": "Sends a localized push notification to a specific user.",
        "operationId": "sendNotification",
        "parameters": [
          {
            "name": "miniapp-user-token",
            "in": "header",
            "required": true,
            "description": "MiniApp user authentication token.",
            "schema": {
              "type": "string"
            },
            "example": "test"
          },
          {
            "name": "miniapp-api-key",
            "in": "header",
            "required": true,
            "description": "MiniApp API key.",
            "schema": {
              "type": "string"
            },
            "example": "test"
          },
          {
            "name": "accept",
            "in": "header",
            "required": false,
            "description": "Expected response media type.",
            "schema": {
              "type": "string"
            },
            "example": "application/json"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "message"
                ],
                "properties": {
                  "message": {
                    "type": "object",
                    "required": [
                      "message_title_ar",
                      "message_body_ar",
                      "message_title_en",
                      "message_body_en"
                    ],
                    "properties": {
                      "message_title_ar": {
                        "type": "string",
                        "description": "Notification title in Arabic."
                      },
                      "message_body_ar": {
                        "type": "string",
                        "description": "Notification body in Arabic."
                      },
                      "message_title_en": {
                        "type": "string",
                        "description": "Notification title in English."
                      },
                      "message_body_en": {
                        "type": "string",
                        "description": "Notification body in English"
                      }
                    }
                  }
                }
              },
              "example": {
                "user_id": "string",
                "message": {
                  "message_title_ar": "string",
                  "message_body_ar": "string",
                  "message_title_en": "string",
                  "message_body_en": "string"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Notification sent successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "success": {
                      "type": "boolean",
                      "description": "Indicates whether the notification was sent successfully."
                    },
                    "message": {
                      "type": "string",
                      "description": "Success message."
                    }
                  }
                },
                "example": {
                  "success": true,
                  "message": "Notification sent successfully"
                }
              }
            }
          },
          "400": {
            "description": "Invalid request payload.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Invalid request data"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized request.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Unauthorized"
                }
              }
            }
          },
          "500": {
            "description": "Internal server error.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "example": {
                  "error": "Internal server error"
                }
              }
            }
          }
        }
      }
    }
  }
}
```