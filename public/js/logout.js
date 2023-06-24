const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.location.href = '/'
    setTimeout(() => window.location.reload(), 1000);
    } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);