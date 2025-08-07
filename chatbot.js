// Inject chatbot HTML into page
document.addEventListener("DOMContentLoaded", function () {
  const chatContainer = document.createElement("div");
  chatContainer.innerHTML = `
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Chat Button -->
    <div id="chatButton" class="fixed bottom-8 right-8 z-50">
        <div class="relative">
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-ping"></div>
            <button class="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-5 rounded-full shadow-2xl relative z-10">
                <i class="fas fa-robot text-2xl"></i>
            </button>
        </div>
    </div>

    <!-- Chat Window -->
    <div id="chatWindow" class="fixed bottom-28 right-8 w-[420px] h-[600px] bg-white rounded-3xl shadow-2xl z-50 hidden flex flex-col">
        <div class="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-t-3xl flex justify-between items-center">
            <h3 class="text-lg font-semibold">Excelize AI Assistant</h3>
            <button id="closeChat" class="text-white">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="flex-1 p-4 overflow-y-auto text-sm space-y-2" id="chatMessages">
            <div class="bg-gray-100 p-3 rounded-xl">
                👋 Welcome! I’m your Excelize AI Assistant. How can I help you today?
            </div>
        </div>
        <div class="p-4 border-t bg-white">
            <div class="flex space-x-2">
                <input id="chatInput" class="flex-1 border rounded-xl px-4 py-2 text-sm" placeholder="Type your message..." />
                <button id="sendMessage" class="bg-indigo-500 text-white px-4 py-2 rounded-xl">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </div>
  `;

  document.body.appendChild(chatContainer);

  // Basic Chat Toggle
  document.getElementById('chatButton').onclick = () => {
    document.getElementById('chatWindow').classList.remove('hidden');
  };

  document.getElementById('closeChat').onclick = () => {
    document.getElementById('chatWindow').classList.add('hidden');
  };

  // Message Handling
  document.getElementById('sendMessage').onclick = sendMessage;
  document.getElementById('chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
  });

  function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    const chatMessages = document.getElementById('chatMessages');
    const userMsg = document.createElement('div');
    userMsg.className = "bg-indigo-100 p-3 rounded-xl text-right";
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.className = "bg-gray-100 p-3 rounded-xl";
    botMsg.textContent = "🤖 Thank you! We'll get back to you shortly.";
    setTimeout(() => chatMessages.appendChild(botMsg), 1000);

    input.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
