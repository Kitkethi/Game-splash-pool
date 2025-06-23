async function updateStatus() {
  try {
    const res = await fetch('status.json');
    const data = await res.json();
    document.getElementById('status').textContent = data.online ? '🟢 Online' : '🔴 Offline';
    document.getElementById('players').textContent = `Jogadores online: ${data.players}`;
    document.getElementById('uptime').textContent = `Tempo de atividade: ${data.uptime}`;
  } catch {
    document.getElementById('status').textContent = '❌ Erro ao carregar status';
  }
}
updateStatus();
setInterval(updateStatus, 30000);
