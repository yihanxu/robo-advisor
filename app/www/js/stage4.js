function verification(){
    if ($('#verificationCode').val() != '345')
        alert("Wrong verification code! Please answer the questions and provide the correct code.")
    else {
        $.post('/upload.php',{
            'stage': 'final',
            'matric_number': sessionStorage.getItem('matricNum'),
            'total_incentives': sessionStorage.getItem('totalIncentives'),
            'rating': sessionStorage.getItem('rating')
        })
        document.location.href = './end.html'
    }
}

$("#bonus").text(sessionStorage.getItem('totalIncentives'));