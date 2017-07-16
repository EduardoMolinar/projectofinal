pdf.controller('pdfController', ['$scope', 'pdfService', '$window', '$uibModal', 'ngToast',
  function($scope, pdfService, $window, $uibModal, ngToast) {
    "use strict"
    var vm = this;

    vm.add = {};
    vm.files = [];

    vm.addOk = function(name, description, user, file) {

      var file = vm.myFile;
      console.log(file);
      var pdfVer = file.name.match("^.+\.(([pP][dD][fF]))$")
      console.log(pdfVer);

      if (pdfVer == null) {
        ngToast.create({
          className: 'danger',
          content: 'File isnt in PDF format',
          dismissButton: 'true',
          animation: 'slide'
        });

        return;
      }
      if (!(name && description && user && file)) {
        ngToast.create({
          className: 'warning',
          content: 'All fields must be filled.',
          dismissButton: 'true',
          animation: 'slide'
        });

        return;
      }
      hbj
      var wrapper = {
        name: name,
        pdf: file,
        description: description,
        user: user,
      }
      console.log(wrapper);

      var xhr = pdfService.createDocument(wrapper);

      xhr.then(function(response){

        vm.add = {};
        ngToast.create({
          className: 'success',
          content: 'Document Created.',
          dismissButton: 'true',
          animation: 'slide'
        });

      });

    xhr.catch(function(error) {

      ngToast.create({
        className: 'danger',
        content: 'Error while creating document.',
        dismissButton: 'true',
        animation: 'slide'
      });

    });

    };

    vm.cancelAdd = function() {
      vm.addFlag = false;
      vm.add = {};
    };

    vm.edit = function(id, name, description) {
      vm.editFlag = true;
      vm.addFlag = false;
      vm.tempName = name;
      vm.id= id;
      vm.name = name;
      vm.description = description;
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      console.log("edit");
    };

    vm.editOk = function(id, name, description) {

      var editWrapper = {
        "name": name,
        "description": description

      };

      if (name == "" && description == "" ) {
        ngToast.create({
          className: 'danger',
          content: 'No data to update, please fill at least one field.',
          dismissButton: 'true',
          animation: 'slide'
        });
        return;
      }

      var xhr = pdfService.editPdf(id, editWrapper);

      xhr.then(function(response) {
        vm.editFlag = false;
        ngToast.create({
          className: 'success',
          content: 'The document was updated successfully.',
          dismissButton: 'true',
          animation: 'slide'
        });
        console.log("bien");
      });

      xhr.catch(function(error) {
        ngToast.create({
          className: 'danger',
          content: 'Error Updating document.',
          dismissButton: 'true',
          animation: 'slide'
        });
        console.log("mal");
      })

    };

    vm.download = function(download) {
      $window.open(download, "__blank")
    };

    vm.fileHandler = function () {
      var file = vm.myFile
    };

    vm.cancelEdit = function() {
      vm.editFlag=false;
    };

    vm.loadPdf = function() {
      var xhr = pdfService.getAllPdf();

      xhr.then(function(response) {
        vm.docsData = response.data;
      });

      xhr.catch(function(error) {
        ngToast.create({
          className: 'danger',
          content: 'Ups... esto no debería pasar </3',
          dismissButton: 'true',
          animation: 'slide'
        });
      });

    };

    vm.setup = function() {
      vm.loadPdf();
    };

    vm.setup();
  }
]);
