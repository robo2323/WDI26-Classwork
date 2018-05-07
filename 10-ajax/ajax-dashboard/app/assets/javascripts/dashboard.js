const qs = (q) => document.querySelector(q);

document.addEventListener('DOMContentLoaded', async () => {
    const info = await fetch('./info', {
        method: 'post',
        body: JSON.stringify({
            test: "test",
            authenticity_token: "<%= form_authenticity_token%>"
        })
    }).then(res => res.json())
    console.log(info)
    qs('#bro').textContent = info;
    // setInterval(async () => {
    //     const info = await fetch('/info').then(res => res.json());
    //
    //     qs('#bro').textContent = info.number
    //     qs('#time').textContent = info.time
    //     qs('#uptime').textContent = info.uptime
    //     const data = qs('#test').value
    //
    //
    // }, 1000)


});
