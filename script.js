function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  // Calculate the expression
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
