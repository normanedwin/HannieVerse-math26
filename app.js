//////////////////////////////
// EddieMath AI 26 JS Logic //
//////////////////////////////

// --- Calculator ---
function insertValue(value) {
  const input = document.getElementById("mathInput");
  input.value += value;
}

function clearInput() {
  document.getElementById("mathInput").value = "";
  document.getElementById("solution").innerHTML = "";
}

function solveMath() {
  const input = document.getElementById("mathInput").value;
  const solutionDiv = document.getElementById("solution");

  if (input.trim() === "") {
    solutionDiv.innerHTML = "Please enter a math expression.";
    return;
  }

  try {
    // Convert ^ to ** for exponent
    const expr = input.replace("^", "**");

    // Basic calculation
    const result = eval(expr);

    // Step-by-step (simple demo)
    solutionDiv.innerHTML = `
      <p><strong>Step 1:</strong> Your input: ${input}</p>
      <p><strong>Step 2:</strong> Convert ^ to power: ${expr}</p>
      <p><strong>Step 3:</strong> Calculate: ${result}</p>
      <p><strong>Answer:</strong> ${result}</p>
    `;
  } catch (error) {
    solutionDiv.innerHTML = "Invalid expression. Check your input.";
  }
}

// --- Notebook ---
function saveNote() {
  const note = document.getElementById("notebookInput").value;
  if (note.trim() === "") return;

  const savedNotes = document.getElementById("savedNotes");
  const p = document.createElement("p");
  p.textContent = note;
  savedNotes.appendChild(p);

  document.getElementById("notebookInput").value = "";
}

// --- Language Switcher ---
function changeLanguage() {
  const lang = document.getElementById("languageSelect").value;
  alert("Language switched to: " + lang + " (UI only for now)");
}
