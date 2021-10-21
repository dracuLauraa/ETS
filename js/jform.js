$.validator.addMethod(
  "letterswithbasicpunc",
  function (value, element) {
    return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
  },
  "Letters or punctuation only please"
);
$(document).ready(function () {
  $("#validasi").validate({
    rules: {
      nama: {
        required: true,
        letterswithbasicpunc: true,
        minlength: 2,
      },
      jurusan: {
        required: true,
        jurusan: true,
      },
      nomor: {
        required: true,
        digits: true,
        minlength: 10,
      },
      nrp: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
    },
    messages: {
      nama: {
        required: "Nama harap diisi!",
        letterswithbasicpunc: "Nama tidak boleh mengandung angka",
        minlength: "Nama harus melebihi 1 huruf!"
      },
      nrp: {
        required: "NRP wajib diisi!",
        digits: "NRP harus terdiri dari 10 angka",
        minlength: "minimal 10 digit",
        maxlength: "maksimal 10 digit",
      },
      jurusan: {
        required: "Pilih jurusan anda!",
      },
      nomor: {
        required: "Nomor Handphone wajib diisi!",
        digits: "Nomor harus berupa angka dengan minimal 10 digit",
        minlength: "minimal 10 angka",
      },
    },
  });
});
