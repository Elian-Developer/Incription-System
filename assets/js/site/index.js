$(document).ready(function () {
  const inputName = document.getElementById('name');
  const inputProvince = document.getElementById('province');
  const inputCity = document.getElementById('city');
  const inputSector = document.getElementById('sector');
  const inputStreet = document.getElementById('street');
  const inputCareer = document.getElementById('career');

  let valueName = '';
  let valueProvince = '';
  let valueCity = '';
  let valueSector = '';
  let valueStreet = '';
  let valueCareer = '';

  let valueProgOne = '';
  let valueProgTwo = '';
  let valueDbi = '';
  let valueDba = '';
  let valueMat = '';

  let valueNetFund = '';
  let valueOpeSys = '';
  let valueDif = '';
  let valueWan = '';
  let valueSec = '';

  let valueAdv = '';
  let valuePhotography = '';
  let valueMarketing = '';
  let valueDesk = '';
  let valueDigital = '';

  /* console.log(valueProgOne) */

  //Events

  $('#main-container').on('click', '#save', () => {
    CreateSelectionPage();
  });

  $('#main-container').on('click', '#reset', () => {
    Reset();
  });

  $('#main-container').on('click', '#btn-GoToForm', () => {
    GenerateHtmlForm();
  });

  $('#main-container').on('click', '#btn-finish', () =>{
    GenerateHtmlFormNew();
  });

  $('#main-container').on('click', '#btn-GoToSelection-soft', () => {
    GenerateSoftwareSelection();
  });

  $('#main-container').on('click', '#btn-GoToSelection-network', () => {
    GenerateNetworksSelection();
  });

  $('#main-container').on('click', '#btn-GoToSelection-multimedia', () => {
    GenerateMultimediaSelection();
  });

  $('#main-container').on('click', '#btn-print-soft', () => {
    valueProgOne = $("#progOne input[type='radio']:checked").val();
    valueProgTwo = $("#progTwo input[type='radio']:checked").val();
    valueDbi = $("#dbi-radio input[type='radio']:checked").val();
    valueDba = $("#dba-radio input[type='radio']:checked").val();
    valueMat = $("#mat-radio input[type='radio']:checked").val();
    GenerateSoftwareSummary();
  });

  $('#main-container').on('click', '#btn-print-net', () => {
    valueNetFund = $("#NetFund input[type='radio']:checked").val();
    valueOpeSys = $("#OperativeSys input[type='radio']:checked").val();
    valueDif = $("#dif input[type='radio']:checked").val();
    valueWan = $("#wan input[type='radio']:checked").val();
    valueSec = $("#sec input[type='radio']:checked").val();

    GenerateNetworkSummary();
  });

  $('#main-container').on('click', '#btn-print-multi', () => {
    valueAdv = $("#tmm  input[type='radio']:checked").val();
    valuePhotography = $("#photo input[type='radio']:checked").val();
    valueMarketing = $("#mark input[type='radio']:checked").val();
    valueDesk = $("#desk input[type='radio']:checked").val();
    valueDigital = $("#dig input[type='radio']:checked").val();
    GenerateMultimediaSummary();
  });

  //Functions
  function CreateSelectionPage() {
    valueName = $('#name').val();
    valueProvince = $('#province').val();
    valueCity = $('#city').val();
    valueSector = $('#sector').val();
    valueStreet = $('#street').val();
    valueCareer = $('#career').val();

    if (Validate()) {
      switch (valueCareer) {
        case 'Software Development':
          GenerateSoftwareSelection();
          break;
        case 'Networks':
          GenerateNetworksSelection();
          break;
        case 'Multimedia':
          GenerateMultimediaSelection();
          break;
        default:
          alert('You must complete all the info.');
      }
    }
  }

  function GenerateSoftwareSelection() {
    const htmlSelectionPage = `
    
    <div class="col-6 offset-3 mb-5 margin">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li id="btn-GoToForm" class="breadcrumb-item"><a href="#">Personal Information</a></li>
                        <li id="btn-GoToSelection-soft" class="breadcrumb-item" aria-current="page">Subject Selection</li>
                    </ol>
                </nav>
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h4 class="card-title text-center fst-italic"> Software Subject Selection</h4>
                    </div>
                    <div class="card-body">
                       <div class="accordion" id="software">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ProgOne" aria-expanded="true" aria-controls="ProgOne">
                                Programming 1
                            </button>
                            </h2>
                            <div id="ProgOne" class="accordion-collapse collapse show" data-bs-parent="#software">
                            <div id="progOne" class="accordion-body">
                                <input class="form-check-input" name="ProgOne" type="radio" value="Ma 8:00 - 12:59">
                                <label class="form-check-label me-2">Ma 8:00 - 12:59</label>
                                <input class="form-check-input" name="ProgOne" type="radio" value="Lu 17:00 - 21:59">
                                <label class="form-check-label me-2">Lu 17:00 - 21:59</label>
                                <input class="form-check-input" name="ProgOne" type="radio" value="Vi 14:00 - 17:59">
                                <label class="form-check-label">Vi 14:00 - 17:59</label>
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ProgTwo" aria-expanded="false" aria-controls="ProgTwo">
                                Programming 2
                            </button>
                            </h2>
                            <div id="ProgTwo" class="accordion-collapse collapse" data-bs-parent="#software">
                            <div id="progTwo" class="accordion-body">
                                <input class="form-check-input" name="ProgTwo" type="radio" value="Lu 8:00 - 12:59">
                                <label class="form-check-label me-2">Lu 8:00 - 12:59</label>
                                <input class="form-check-input" name="ProgTwo" type="radio" value="Mi 17:00 - 21:59">
                                <label class="form-check-label me-2">Mi 17:00 - 21:59</label>
                                <input class="form-check-input" name="ProgTwo" type="radio" value="Ju 14:00 - 17:59">
                                <label class="form-check-label">Ju 14:00 - 17:59</label>
                            </div>
                        </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dbi" aria-expanded="false" aria-controls="dbi">
                                Data Base Introduction
                            </button>
                            </h2>
                            <div id="dbi" class="accordion-collapse collapse" data-bs-parent="#software">
                            <div id="dbi-radio" class="accordion-body">
                                <input class="form-check-input" name="dbi" type="radio" value="Ju 8:00 - 10:00, Vi 9:00 - 11:00">
                                <label class="form-check-label me-2">Ju 8:00 - 10:00, Vi 9:00 - 11:00</label>
                                <input class="form-check-input" name="dbi" type="radio" value="Sa 17:00 - 21:59">
                                <label class="form-check-label me-2">Sa 17:00 - 21:59</label>
                                <input class="form-check-input" name="dbi" type="radio" value="Ma 14:00 - 17:59">
                                <label class="form-check-label">Ma 14:00 - 17:59</label>
                            </div>
                        </div>
                        </div>

                         <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dba" aria-expanded="false" aria-controls="dba">
                                Data Base Advanced
                            </button>
                            </h2>
                            <div id="dba" class="accordion-collapse collapse" data-bs-parent="#software">
                            <div id="dba-radio" class="accordion-body">
                                <input class="form-check-input" name="dba" type="radio" value="Mi 8:00 - 10:00, Ju 9:00 - 11:00">
                                <label class="form-check-label me-2">Mi 8:00 - 10:00, Ju 9:00 - 11:00</label>
                                <input class="form-check-input" name="dba" type="radio" value="Lu 17:00 - 18:59, Mi 19:00 - 21:59">
                                <label class="form-check-label me-2">Lu 17:00 - 18:59, Mi 19:00 - 21:59</label>
                                <input class="form-check-input" name="dba" type="radio" value="Ju 14:00 - 17:59">
                                <label class="form-check-label">Ju 14:00 - 17:59</label>
                            </div>
                            </div>
                        </div>

                         <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mat" aria-expanded="false" aria-controls="mat">
                                Integral Calculus
                            </button>
                            </h2>
                            <div id="mat" class="accordion-collapse collapse" data-bs-parent="#software">
                            <div id="mat-radio" class="accordion-body">
                                <input class="form-check-input" name="mat" type="radio" value="Lu 8:00 - 12:59">
                                <label class="form-check-label me-2">Lu 8:00 - 12:59</label>
                                <input class="form-check-input" name="mat" type="radio" value="Mi 8:00 - 12:59">
                                <label class="form-check-label me-2">Mi 8:00 - 12:59</label>
                                <input class="form-check-input" name="mat" type="radio" value="Mi 14:00 - 18:59">
                                <label class="form-check-label">Mi 14:00 - 18:59</label>
                            </div>
                        </div>
                        </div>
                    </div>
                        <button id="btn-print-soft" class="btn btn-outline-primary float-end mt-3 mb-2">Print Selection</button>
                        <button id="btn-back" class="btn btn-outline-warning float-end mt-3 me-2">Back</button>
                    </div>
                </div>
            </div>
    `;

    $('#main-container').html(htmlSelectionPage);
  }

  function GenerateNetworksSelection() {
    const htmlSelectionPage = `
      <div class="col-6 offset-3 mb-5 margin">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li id="btn-GoToForm" class="breadcrumb-item"><a href="#">Personal Information</a></li>
                        <li class="breadcrumb-item" aria-current="page">Subject Selection</li>
                    </ol>
                </nav>
                <div class="card">
                    <div class="card-header bg-success text-white">
                        <h4 class="card-title text-center fst-italic">Networks Subject Selection</h4>
                    </div>
                    <div class="card-body">
                       <div class="accordion" id="network">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#NetFund" aria-expanded="true" aria-controls="NetFund">
                                Networks Fundamentals
                            </button>
                            </h2>
                            <div id="NetFund" class="accordion-collapse collapse show" data-bs-parent="#network">
                            <div id="NetFund" class="accordion-body">
                                <input class="form-check-input" name="ProgOne" type="radio" value="Ma 8:00 - 12:59">
                                <label class="form-check-label me-2">Ma 8:00 - 12:59</label>
                                <input class="form-check-input" name="ProgOne" type="radio" value="Lu 17:00 - 21:59">
                                <label class="form-check-label me-2">Lu 17:00 - 21:59</label>
                                <input class="form-check-input" name="ProgOne" type="radio" value="Vi 14:00 - 17:59">
                                <label class="form-check-label">Vi 14:00 - 17:59</label>
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#OperativeSys" aria-expanded="false" aria-controls="OperativeSys">
                                Operative System
                            </button>
                            </h2>
                            <div id="OperativeSys" class="accordion-collapse collapse" data-bs-parent="#network">
                            <div id="OperativeSys" class="accordion-body">
                                <input class="form-check-input" name="ProgTwo" type="radio" value="Lu 8:00 - 12:59">
                                <label class="form-check-label me-2">Lu 8:00 - 12:59</label>
                                <input class="form-check-input" name="ProgTwo" type="radio" value="Mi 17:00 - 21:59">
                                <label class="form-check-label me-2">Mi 17:00 - 21:59</label>
                                <input class="form-check-input" name="ProgTwo" type="radio" value="Ju 14:00 - 17:59">
                                <label class="form-check-label">Ju 14:00 - 17:59</label>
                            </div>
                        </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dif" aria-expanded="false" aria-controls="dif">
                                Differential Calculus
                            </button>
                            </h2>
                            <div id="dif" class="accordion-collapse collapse" data-bs-parent="#network">
                            <div id="dif" class="accordion-body">
                                <input class="form-check-input" name="dif" type="radio" value="Lu 8:00 - 12:59">
                                <label class="form-check-label me-2">Lu 8:00 - 12:59</label>
                                <input class="form-check-input" name="dif" type="radio" value="Mi 8:00 - 12:59">
                                <label class="form-check-label me-2">Mi 8:00 - 12:59</label>
                                <input class="form-check-input" name="dif" type="radio" value="Mi 14:00 - 18:59">
                                <label class="form-check-label">Mi 14:00 - 18:59</label>
                            </div>
                        </div>
                        </div>

                         <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#wan" aria-expanded="false" aria-controls="wan">
                                WAN Technology
                            </button>
                            </h2>
                            <div id="wan" class="accordion-collapse collapse" data-bs-parent="#network">
                            <div id="wan" class="accordion-body">
                                <input class="form-check-input" name="dba" type="radio"  value="Mi 8:00 - 10:00, Ju 9:00 - 11:00">
                                <label class="form-check-label me-2">Mi 8:00 - 10:00, Ju 9:00 - 11:00</label>
                                <input class="form-check-input" name="dba" type="radio"  value="Lu 17:00 - 18:59, Mi 19:00 - 21:59">
                                <label class="form-check-label me-2">Lu 17:00 - 18:59, Mi 19:00 - 21:59</label>
                                <input class="form-check-input" name="dba" type="radio"  value="Ju 14:00 - 17:59">
                                <label class="form-check-label">Ju 14:00 - 17:59</label>
                            </div>
                        </div>
                        </div>

                         <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sec" aria-expanded="false" aria-controls="sec">
                                Security Fundamentals
                            </button>
                            </h2>
                            <div id="sec" class="accordion-collapse collapse" data-bs-parent="#network">
                            <div id="sec" class="accordion-body">
                                <input class="form-check-input" name="mat" type="radio" value="Lu 8:00 - 12:59">
                                <label class="form-check-label me-2">Lu 8:00 - 12:59</label>
                                <input class="form-check-input" name="mat" type="radio" value="Mi 8:00 - 12:59">
                                <label class="form-check-label me-2">Mi 8:00 - 12:59</label>
                                <input class="form-check-input" name="mat" type="radio" value="Mi 14:00 - 18:59">
                                <label class="form-check-label">Mi 14:00 - 18:59</label>
                            </div>
                        </div>
                        </div>
                    </div>
                    <button id="btn-print-net" class="btn btn-outline-success float-end mt-3 mb-2">Print Selection</button>
                    <button id="btn-back" class="btn btn-outline-warning float-end mt-3 me-2">Back</button>
                </div>
               </div>
            </div>
    `;

    $('#main-container').html(htmlSelectionPage);
  }

  function GenerateMultimediaSelection() {
    const htmlSelectionPage = `

    <div class="col-6 offset-3 mb-5 margin">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li id="btn-GoToForm" class="breadcrumb-item"><a href="#">Personal Information</a></li>
                        <li class="breadcrumb-item" aria-current="page">Subject Selection</li>
                    </ol>
                </nav>
                <div class="card">
                    <div class="card-header bg-danger text-white">
                        <h4 class="card-title text-center fst-italic">Multimedia Subject Selection</h4>
                    </div>
                    <div class="card-body">
                       <div class="accordion" id="multimedia">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tmm" aria-expanded="true" aria-controls="tmm">
                                Advanced Visual communication
                            </button>
                            </h2>
                            <div id="tmm" class="accordion-collapse collapse show" data-bs-parent="#multimedia">
                            <div id="tmm" class="accordion-body">
                                <input class="form-check-input" name="ProgOne" type="radio" value="Ma 8:00 - 12:59">
                                <label class="form-check-label me-2">Ma 8:00 - 12:59</label>
                                <input class="form-check-input" name="ProgOne" type="radio" value="Lu 17:00 - 21:59">
                                <label class="form-check-label me-2">Lu 17:00 - 21:59</label>
                                <input class="form-check-input" name="ProgOne" type="radio" value="Vi 14:00 - 17:59">
                                <label class="form-check-label">Vi 14:00 - 17:59</label>
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#photo" aria-expanded="false" aria-controls="photo">
                                Photography
                            </button>
                            </h2>
                            <div id="photo" class="accordion-collapse collapse" data-bs-parent="#multimedia">
                            <div id="photo" class="accordion-body">
                                <input class="form-check-input" name="ProgTwo" type="radio" value="Lu 8:00 - 12:59">
                                <label class="form-check-label me-2">Lu 8:00 - 12:59</label>
                                <input class="form-check-input" name="ProgTwo" type="radio" value="Mi 17:00 - 21:59">
                                <label class="form-check-label me-2">Mi 17:00 - 21:59</label>
                                <input class="form-check-input" name="ProgTwo" type="radio" value="Ju 14:00 - 17:59">
                                <label class="form-check-label">Ju 14:00 - 17:59</label>
                            </div>
                        </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mark" aria-expanded="false" aria-controls="mark">
                                Marketing
                            </button>
                            </h2>
                            <div id="mark" class="accordion-collapse collapse" data-bs-parent="#multimedia">
                            <div id="mark" class="accordion-body">
                                <input class="form-check-input" name="dif" type="radio" value="Lu 8:00 - 12:59">
                                <label class="form-check-label me-2">Lu 8:00 - 12:59</label>
                                <input class="form-check-input" name="dif" type="radio" value="Mi 8:00 - 12:59">
                                <label class="form-check-label me-2">Mi 8:00 - 12:59</label>
                                <input class="form-check-input" name="dif" type="radio" value="Mi 14:00 - 18:59">
                                <label class="form-check-label">Mi 14:00 - 18:59</label>
                            </div>
                        </div>
                        </div>

                         <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#desk" aria-expanded="false" aria-controls="desk">
                                Desktop Publishing Introduction
                            </button>
                            </h2>
                            <div id="desk" class="accordion-collapse collapse" data-bs-parent="#multimedia">
                            <div id="desk" class="accordion-body">
                                <input class="form-check-input" name="dba" type="radio" value=" Mi 8:00 - 10:00, Ju 9:00 - 11:00">
                                <label class="form-check-label me-2">Mi 8:00 - 10:00, Ju 9:00 - 11:00</label>
                                <input class="form-check-input" name="dba" type="radio" value="Lu 17:00 - 18:59, Mi 19:00 - 21:59">
                                <label class="form-check-label me-2">Lu 17:00 - 18:59, Mi 19:00 - 21:59</label>
                                <input class="form-check-input" name="dba" type="radio" value="Ju 14:00 - 17:59">
                                <label class="form-check-label">Ju 14:00 - 17:59</label>
                            </div>
                        </div>
                        </div>

                         <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dig" aria-expanded="false" aria-controls="dig">
                                Digital Illustration
                            </button>
                            </h2>
                            <div id="dig" class="accordion-collapse collapse" data-bs-parent="#multimedia">
                            <div id="dig" class="accordion-body">
                                <input class="form-check-input" name="mat" type="radio" value="Lu 8:00 - 12:59">
                                <label class="form-check-label me-2">Lu 8:00 - 12:59</label>
                                <input class="form-check-input" name="mat" type="radio" value="Mi 8:00 - 12:59">
                                <label class="form-check-label me-2">Mi 8:00 - 12:59</label>
                                <input class="form-check-input" name="mat" type="radio" value="Mi 14:00 - 18:59">
                                <label class="form-check-label">Mi 14:00 - 18:59</label>
                            </div>
                        </div>
                        </div>
                    </div>
                    <button id="btn-print-multi" class="btn btn-outline-danger float-end mt-3 mb-2">Print Selection</button>
                    <button id="btn-back" class="btn btn-outline-warning float-end mt-3 me-2">Back</button>
                </div>
            </div>  
        </div> 
    `;

    $('#main-container').html(htmlSelectionPage);
  }

  function GenerateHtmlForm() {
    const htmlForm = `
      <div class="col-6 offset-3 margin">
             <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item" aria-current="page">Personal Information</li>
                </ol>
            </nav>
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h1 class="card-title text-center fst-italic">Personal Information</h1>
                </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4 mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input id="name" type="text" placeholder="Type your name..." class="form-control">
                                <small class="text-danger"></small>
                            </div>

                            <div class=" col-4 mb-3">
                                <label for="province" class="form-label">Province</label>
                                <input id="province" type="text" placeholder="Type your province..." class="form-control">
                                <small class="text-danger"></small>
                            </div>

                            <div class=" col-4 mb-3">
                                <label for="city" class="form-label">City</label>
                                <input id="city" type="text" placeholder="Type your city..." class="form-control">
                                <small class="text-danger"></small>
                            </div>
                        </div>

                        <div class="row">
                            <div class=" col-6 mb-3">
                                <label for="sector" class="form-label">Sector</label>
                                <input id="sector" type="text" placeholder="Type your sector..." class="form-control">
                                 <small class="text-danger"></small>
                            </div>

                            <div class=" col-6 mb-3">
                                <label for="street" class="form-label">Street</label>
                                <input id="street" type="text" placeholder="Type your street..." class="form-control">
                                <small class="text-danger"></small>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="career" class="form-label">Career</label>
                            <select id="career" class="form-select">
                                <option value="" selected>Select a career</option>
                                <option value="Software Development">Software Development</option>
                                <option value="Multimedia">Multimedia</option>
                                <option value="Networks">Networks</option>
                            </select>
                            <small class="text-danger"></small>
                        </div>
                        <div class="float-end">
                            <button id="reset" class="btn btn-outline-secondary">Reset</button>
                            <button id="save" class="btn btn-outline-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
    `;
    $('#main-container').html(htmlForm);
    $('#name').val(valueName);
    $('#province').val(valueProvince);
    $('#city').val(valueCity);
    $('#sector').val(valueSector);
    $('#street').val(valueStreet);
    $('#career').val(valueCareer);
  }

  function GenerateHtmlFormNew(){
    const htmlFormNew = `
        <div class="col-6 offset-3 margin">
             <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item" aria-current="page">Personal Information</li>
                </ol>
            </nav>
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h1 class="card-title text-center fst-italic">Personal Information</h1>
                </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4 mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input id="name" type="text" placeholder="Type your name..." class="form-control">
                                <small class="text-danger"></small>
                            </div>

                            <div class=" col-4 mb-3">
                                <label for="province" class="form-label">Province</label>
                                <input id="province" type="text" placeholder="Type your province..." class="form-control">
                                <small class="text-danger"></small>
                            </div>

                            <div class=" col-4 mb-3">
                                <label for="city" class="form-label">City</label>
                                <input id="city" type="text" placeholder="Type your city..." class="form-control">
                                <small class="text-danger"></small>
                            </div>
                        </div>

                        <div class="row">
                            <div class=" col-6 mb-3">
                                <label for="sector" class="form-label">Sector</label>
                                <input id="sector" type="text" placeholder="Type your sector..." class="form-control">
                                 <small class="text-danger"></small>
                            </div>

                            <div class=" col-6 mb-3">
                                <label for="street" class="form-label">Street</label>
                                <input id="street" type="text" placeholder="Type your street..." class="form-control">
                                <small class="text-danger"></small>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="career" class="form-label">Career</label>
                            <select id="career" class="form-select">
                                <option value="" selected>Select a career</option>
                                <option value="Software Development">Software Development</option>
                                <option value="Multimedia">Multimedia</option>
                                <option value="Networks">Networks</option>
                            </select>
                            <small class="text-danger"></small>
                        </div>
                        <div class="float-end">
                            <button id="reset" class="btn btn-outline-secondary">Reset</button>
                            <button id="save" class="btn btn-outline-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
    `;

    $('#main-container').html(htmlFormNew);
  }

  function GenerateSoftwareSummary() {
    const htmlSummaryPage = `

     <div class="col-6 offset-3 mb-4 margin">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li id="btn-GoToForm" class="breadcrumb-item"><a href="#">Personal Information</a></li>
                        <li id="btn-GoToSelection-soft" class="breadcrumb-item"><a href="#">Subject Selection</a></li>
                        <li class="breadcrumb-item" aria-current="page">Summary Selection</li>
                    </ol>
                </nav>
            <div class="card">
                <div class="card-header bg-black text-white text-center">
                    <h2>Summary Selection</h2>
                </div>
                <div class="card-body">
                    <h3 class="text-center fst-italic">Student Information</h3>
                    <div class="mt-5">
                        <p><span class="fw-bold">Name:</span> ${valueName}</p>
                        <p><span class="fw-bold">Province:</span> ${valueProvince}</p>
                        <p><span class="fw-bold">City:</span> ${valueCity}</p>
                        <p><span class="fw-bold">Sector:</span> ${valueSector}</p>
                        <p><span class="fw-bold">Street:</span> ${valueStreet}</p>
                        <p><span class="fw-bold">Career:</span> ${valueCareer}</p>
                    </div>

                    <div class="mt-3">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Programming 1</th>
                                    <th>Programming 2</th>
                                    <th>Data Base Introduction</th>
                                    <th>Data Base Advanced</th>
                                    <th>Integral Calculus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${valueProgOne}</td>
                                    <td>${valueProgTwo}</td>
                                    <td>${valueDbi}</td>
                                    <td>${valueDba}</td>
                                    <td>${valueMat}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="float-end">
                        <button id="btn-finish" class="btn btn-outline-success">Finish</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#main-container').html(htmlSummaryPage);
  }

  function GenerateNetworkSummary() {
    const htmlSummaryPage = `
    
     <div class="col-6 offset-3 mb-4 margin">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li id="btn-GoToForm" class="breadcrumb-item"><a href="#">Personal Information</a></li>
                        <li id="btn-GoToSelection-network" class="breadcrumb-item"><a href="#">Subject Selection</a></li>
                        <li class="breadcrumb-item" aria-current="page">Summary Selection</li>
                    </ol>
                </nav>
            <div class="card">
                <div class="card-header bg-black text-white text-center">
                    <h2>Summary Selection</h2>
                </div>
                <div class="card-body">
                    <h3 class="text-center fst-italic">Student Information</h3>
                    <div class="mt-5">
                        <p><span class="fw-bold">Name:</span> ${valueName}</p>
                        <p><span class="fw-bold">Province:</span> ${valueProvince}</p>
                        <p><span class="fw-bold">City:</span> ${valueCity}</p>
                        <p><span class="fw-bold">Sector:</span> ${valueSector}</p>
                        <p><span class="fw-bold">Street:</span> ${valueStreet}</p>
                        <p><span class="fw-bold">Career:</span> ${valueCareer}</p>
                    </div>

                    <div class="mt-3">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Networks Fundamentals</th>
                                    <th>Operative Systems</th>
                                    <th>Differential Calculus</th>
                                    <th>WAN Technology</th>
                                    <th>Security Fundamentals</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${valueNetFund}</td>
                                    <td>${valueOpeSys}</td>
                                    <td>${valueDif}</td>
                                    <td>${valueWan}</td>
                                    <td>${valueSec}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="float-end">
                        <button id="btn-finish" class="btn btn-outline-success">Finish</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#main-container').html(htmlSummaryPage);
  }

  function GenerateMultimediaSummary() {
    const htmlSummaryPage = `
    
     <div class="col-6 offset-3 mb-4 margin">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li id="btn-GoToForm" class="breadcrumb-item"><a href="#">Personal Information</a></li>
                        <li id="btn-GoToSelection-multimedia" class="breadcrumb-item"><a href="#">Subject Selection</a></li>
                        <li class="breadcrumb-item" aria-current="page">Summary Selection</li>
                    </ol>
                </nav>
            <div class="card">
                <div class="card-header bg-black text-white text-center">
                    <h2>Summary Selection</h2>
                </div>
                <div class="card-body">
                    <h3 class="text-center fst-italic">Student Information</h3>
                    <div class="mt-5">
                        <p><span class="fw-bold">Name:</span> ${valueName}</p>
                        <p><span class="fw-bold">Province:</span> ${valueProvince}</p>
                        <p><span class="fw-bold">City:</span> ${valueCity}</p>
                        <p><span class="fw-bold">Sector:</span> ${valueSector}</p>
                        <p><span class="fw-bold">Street:</span> ${valueStreet}</p>
                        <p><span class="fw-bold">Career:</span> ${valueCareer}</p>
                    </div>

                    <div class="mt-3">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Advanced Visual communication</th>
                                    <th>Photography</th>
                                    <th>Marketing</th>
                                    <th>Desktop Publishing Introduction</th>
                                    <th>Digital Illustration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${valueAdv}</td>
                                    <td>${valuePhotography}</td>
                                    <td>${valueMarketing}</td>
                                    <td>${valueDesk}</td>
                                    <td>${valueDigital}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
        
                    <div class="float-end">
                        <button id="btn-finish" class="btn btn-outline-success">Finish</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#main-container').html(htmlSummaryPage);
  }

  function ValidateMessage(input, message) {
    const Input = input.parentElement;
    const Message = Input.querySelector('small');
    Message.innerHTML = message;
  }

  function Reset() {
    $('#name').val('').removeClass('success').removeClass('failed').focus();
    ValidateMessage(inputName, '');
    $('#province').val('').removeClass('success').removeClass('failed');
    ValidateMessage(inputProvince, '');
    $('#city').val('').removeClass('success').removeClass('failed');
    ValidateMessage(inputCity, '');
    $('#sector').val('').removeClass('success').removeClass('failed');
    ValidateMessage(inputSector, '');
    $('#street').val('').removeClass('success').removeClass('failed');
    ValidateMessage(inputStreet, '');
    $('#career').val('').removeClass('success').removeClass('failed');
    ValidateMessage(inputCareer, '');
  }

  function Validate() {
    let isValid = true;

    if (valueName == '' || valueName == undefined || valueName == null) {
      isValid = false;
      $('#name').addClass('failed');
      $('#name').removeClass('success');
      ValidateMessage(inputName, 'You must put your name.');
    } else {
      $('#name').addClass('success');
      $('#name').removeClass('failed');
      ValidateMessage(inputName, '');
    }

    if (
      valueProvince == '' ||
      valueProvince == undefined ||
      valueProvince == null
    ) {
      isValid = false;
      $('#province').addClass('failed');
      $('#province').removeClass('success');
      ValidateMessage(inputProvince, 'You must put your province.');
    } else {
      $('#province').addClass('success');
      $('#province').removeClass('failed');
      ValidateMessage(inputProvince, '');
    }

    if (valueCity == '' || valueCity == undefined || valueCity == null) {
      isValid = false;
      $('#city').addClass('failed');
      $('#city').removeClass('success');
      ValidateMessage(inputCity, 'You must put your city.');
    } else {
      $('#city').addClass('success');
      $('#city').removeClass('failed');
      ValidateMessage(inputCity, '');
    }

    if (valueSector == '' || valueSector == undefined || valueSector == null) {
      isValid = false;
      $('#sector').addClass('failed');
      $('#sector').removeClass('success');
      ValidateMessage(inputSector, 'You must put your sector.');
    } else {
      $('#sector').addClass('success');
      $('#sector').removeClass('failed');
      ValidateMessage(inputSector, '');
    }

    if (valueStreet == '' || valueStreet == undefined || valueStreet == null) {
      isValid = false;
      $('#street').addClass('failed');
      $('#street').removeClass('success');
      ValidateMessage(inputStreet, 'You must put your street.');
    } else {
      $('#street').addClass('success');
      $('#street').removeClass('failed');
      ValidateMessage(inputStreet, '');
    }

    if (valueCareer == '' || valueCareer == undefined || valueCareer == null) {
      isValid = false;
      $('#career').addClass('failed');
      $('#career').removeClass('success');
      ValidateMessage(inputCareer, 'You must put your career.');
    } else {
      $('#career').addClass('success');
      $('#career').removeClass('failed');
      ValidateMessage(inputCareer, '');
    }

    return isValid;
  }
});
