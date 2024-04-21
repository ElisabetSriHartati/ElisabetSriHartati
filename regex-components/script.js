document.addEventListener('DOMContentLoaded', function () {
    const namaInput = document.getElementById('nama');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const teleponInput = document.getElementById('telepon');
    const umurInput = document.getElementById('umur');

    // Event listener untuk validasi nama secara real-time
    namaInput.addEventListener('input', function () {
        validateNama();
    });

    // Event listener untuk validasi email secara real-time
    emailInput.addEventListener('input', function () {
        validateEmail();
    });

    // Event listener untuk validasi password secara real-time
    passwordInput.addEventListener('input', function () {
        validatePassword();
    });

    // Event listener untuk validasi telepon secara real-time
    teleponInput.addEventListener('input', function () {
        validateTelepon();
    });

    // Event listener untuk validasi umur secara real-time
    umurInput.addEventListener('input', function () {
        validateUmur();
    });
});

function validateNama() {
    const namaInput = document.getElementById('nama');
    const namaError = document.getElementById('nama-error');
    const nama = namaInput.value.trim();

    if (nama === '') {
        namaError.textContent = 'Nama harus diisi';
    } else {
        namaError.textContent = '';
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Format Email tidak valid';
    } else {
        emailError.textContent = '';
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    const password = passwordInput.value.trim();

    if (password === '') {
        passwordError.textContent = 'Password harus diisi';
    } else {
        passwordError.textContent = '';
    }
}

function validateTelepon() {
    const teleponInput = document.getElementById('telepon');
    const teleponError = document.getElementById('telepon-error');
    const telepon = teleponInput.value.trim();

    const teleponRegex = /^\d{10,}$/;
    if (!teleponRegex.test(telepon)) {
        teleponError.textContent = 'Nomor Telepon harus berupa angka dan minimal 10 digit';
    } else {
        teleponError.textContent = '';
    }
}

function validateUmur() {
    const umurInput = document.getElementById('umur');
    const umurError = document.getElementById('umur-error');
    const umur = umurInput.value.trim();

    if (umur === '' || umur < 0) {
        umurError.textContent = 'Umur harus diisi dan harus angka positif';
    } else {
        umurError.textContent = '';
    }
}
