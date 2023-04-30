
# Angular File Upload Example

This is a simple Angular application with a Node.js (Express) backend using MySQL for file storage. The app allows users to upload files, displays a progress bar during the upload process, and shows the uploaded file after completion. The app also includes notifications for success or failure.

## Getting Started

To get started, clone this repository and install the dependencies:

```bash
git clone https://github.com/your-username/angular-nodejs-file-upload.git
cd angular-nodejs-file-upload
npm install
```

## Running the App

To run the app, you need to start both the Angular app and the Node.js server.

### Angular App

To start the Angular app, run:

```bash
ng serve
```

The app will be available at `http://localhost:4200`.

### Node.js Server

To start the Node.js server, navigate to the `server` folder and run:

```bash
node app.js
```

The server will be available at `http://localhost:3000`.

## Usage

To use the app, simply select a file using the file input field and click the "Upload" button. The app will display a progress bar during the upload process and show the uploaded file after completion. If the upload fails, the app will display a notification.

## Dependencies

The app uses the following dependencies:

- Angular
- Angular Material
- Express
- Multer
- MySQL2
- Sequelize

## License

This app is licensed under the MIT License. See the `LICENSE` file for details.