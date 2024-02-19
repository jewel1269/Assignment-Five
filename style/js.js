


const allButton = document.getElementsByClassName('btn-jewel');
for(const allBtn of allButton){
    allBtn.addEventListener("click", function(){
    allBtn.style.backgroundColor = 'green';
})
}



// Assuming your buttons have class "selectable-button"
document.addEventListener('DOMContentLoaded', function () {
    const selectableButtons = document.querySelectorAll('.btn-jewel');
    const maxSelections = 4;
    let selectedButtons = 0;
  
    selectableButtons.forEach(button => {
      button.addEventListener('click', function () {
        if (selectedButtons >= maxSelections) {
          alert('You can only select up to four buttons.');
        } else if (button.classList.contains('selected')) {
          button.classList.remove('selected');
          selectedButtons--;
        } else {
          button.classList.add('selected');
          selectedButtons++;
          if (selectedButtons >= maxSelections) {
            selectableButtons.forEach(disableButton);
          }
        }
      });
    });
  
    function disableButton(button) {
      button.disabled = true;
    }
  });



//  this is checking part

document.getElementById('input-field').addEventListener('input', function () {
    const inputValue = this.value.trim();

    const isNumber = !isNaN(inputValue) && inputValue !== '';
    document.getElementById('myButton').disabled = !isNumber;
  });
  


  // this is button reset part


 
  document.addEventListener('DOMContentLoaded', function () {

const refreshButton = document.getElementById('refreshButton');
    refreshButton.addEventListener('click', function () {
        location.reload();
    });
});

