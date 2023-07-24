// Content script to be injected into the Twitter page
// Replace the Twitter icon dynamically
const observer = new MutationObserver(() => {
    const twitterIcon = document.querySelector('[aria-label="Twitter"]');
    if (twitterIcon) {
        let divElement = twitterIcon.querySelector('div');
        divElement.innerHTML = decodeURIComponent(escape(atob("PHN2ZwogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBhcmlhLWhpZGRlbj0idHJ1ZSIKICBjbGFzcz0ici0xNmVrNXJoIHItNHF0cXA5IHIteXl5eW9vIHItMTZ5MnVveCByLThrejBnayByLWRubXJ6cyByLWJud3FpbSByLTFwbGNydWkgci1scnZpYnIgci1scnNsbHAiCj4KICA8Zz4KICAgIDxwYXRoCiAgICAgIGQ9Ik0yMy42NDMgNC45MzdjLS44MzUuMzctMS43MzIuNjItMi42NzUuNzMzLjk2Mi0uNTc2IDEuNy0xLjQ5IDIuMDQ4LTIuNTc4LS45LjUzNC0xLjg5Ny45MjItMi45NTggMS4xMy0uODUtLjkwNC0yLjA2LTEuNDctMy40LTEuNDctMi41NzIgMC00LjY1OCAyLjA4Ni00LjY1OCA0LjY2IDAgLjM2NC4wNDIuNzE4LjEyIDEuMDYtMy44NzMtLjE5NS03LjMwNC0yLjA1LTkuNjAyLTQuODY4LS40LjY5LS42MyAxLjQ5LS42MyAyLjM0MiAwIDEuNjE2LjgyMyAzLjA0MyAyLjA3MiAzLjg3OC0uNzY0LS4wMjUtMS40ODItLjIzNC0yLjExLS41ODN2LjA2YzAgMi4yNTcgMS42MDUgNC4xNCAzLjczNyA0LjU2OC0uMzkyLjEwNi0uODAzLjE2Mi0xLjIyNy4xNjItLjMgMC0uNTkzLS4wMjgtLjg3Ny0uMDgyLjU5MyAxLjg1IDIuMzEzIDMuMTk4IDQuMzUyIDMuMjM0LTEuNTk1IDEuMjUtMy42MDQgMS45OTUtNS43ODYgMS45OTUtLjM3NiAwLS43NDctLjAyMi0xLjExMi0uMDY1IDIuMDYyIDEuMzIzIDQuNTEgMi4wOTMgNy4xNCAyLjA5MyA4LjU3IDAgMTMuMjU1LTcuMDk4IDEzLjI1NS0xMy4yNTQgMC0uMi0uMDA1LS40MDItLjAxNC0uNjAyLjkxLS42NTggMS43LTEuNDc3IDIuMzIzLTIuNDF6IiBmaWxsPSIjMjZhN2RlIiBzdHJva2U9IiNGRkZGRkYiCiAgICA+PC9wYXRoPgogIDwvZz4KPC9zdmc+")))
        observer.disconnect();
    }
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = chrome.runtime.getURL('');
    }
});

observer.observe(document.body, { childList: true, subtree: true });
  