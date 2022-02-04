# Radiohub / Account Linking

by **SWR Audio Lab**

- [Radiohub / Account Linking](#radiohub--account-linking)
  - [ARD Account](#ard-account)
  - [Workflow for SWR Radiohub](#workflow-for-swr-radiohub)
    - [Apps with In-App Browser Capabilities](#apps-with-in-app-browser-capabilities)
    - [Authorization via Auth Code](#authorization-via-auth-code)
  - [Internal Note](#internal-note)

## ARD Account

The overall account linking process relies on a user's availability of an ARD account. These can be created and managed on [accounts.ard.de](https://accounts.ard.de/).  

Documentation of the underlying infrastructure is available on the [Account Management Service (AMS)](https://developer.ard.de/account-management-service) page on [developer.ard.de](https://developer.ard.de/account-management-service).

## Workflow for SWR Radiohub

Apps with a relationship with and connection to SWR Radiohub can make use of Radiohub's provided `user/auth` paths to orchestrate an account linking process. This workflow links an existing `appId` to a user's ARD account (uniquely identified by email address).  

This connection allows certain features (like playback positions) to be synced across devices.

The workflow is different whether the app has the ability to open an [in-app browser](#apps-with-in-app-browser-capabilities) (such as mobile phones) or [does not have this option](#authorization-via-auth-code) (like companion devices such as smart speakers or a car's infotainment unit).

### Apps with In-App Browser Capabilities

1. Open `/v2/user/auth/ard/initiate/?appId` in an in-app browser
2. The user will be forwarded to the ARD login portal
3. If the ARD login was successful, the user is being returned to Radiohub, which verifies ARD's provided credentials and user details
4. If successful, the page response will contain a header `swr-user-account: successful`. The app should always look for this header and once provided close the in-app browser
5. Once the header from step 4 is provided, the app needs to call `/v2/user/app/info/?appId` (authentication required), which (if successful) will include a new `account` block, showing the user's email and details.

### Authorization via Auth Code

1. Call `/v2/user/auth/ard/code/?appId` to retrieve a user-facing auth code (authentication required).  
  `code` (123456) or `codeReadable` (123-456) are to be displayed to the user  
  `validUntil` notes the code's expiration timestamp (ISO 8601)  
  `displayLink` can provide additional guidance or web link for the user  
  `webUrl` can be used to display a QR code for the user to scan and start the login process
2. The user will need to open a web page on another mobile phone or device. This page offers an input form for the 6-digit code.
3. Once the code was entered, the user is forwarded to initate the login (*internally `/v2/user/auth/ard/initiate`*), this verifies the code and redirects to the ARD login portal
4. If the ARD login was successful, the user is being returned to Radiohub, which verifies ARD's provided credentials and user details
5. If successful, the user will see a page with a confirmation text
6. While steps 2-5 are happening the app needs to periodically call `/v2/user/app/info/?appId` (authentication required), which (if successful) will include a new `account` object, showing the user's email and details. A 15 second interval is recommended.

Please note that calling or refreshing `/v2/user/auth/ard/code/?appId` will remove and invalidate the old code and provide a new one.

## Internal Note

Radiohub workflow is always `code` -> `form` -> `initiate` -> `callback`, where some workflows might skip or pass certain steps.
