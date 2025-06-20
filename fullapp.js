document.body.innerHTML = '<body style="background-color: darkred;">' +
'<div id="michael" style="text-align: center; align-content: center; display: block;">' +
'<img src="https://footscrayhs-vic.compass.education/download/secure/cdn/full/a40ec93d-30e1-4c63-9e61-34cfb6702433_3004250115AM?requestguid=a40ec93d-30e1-4c63-9e61-34cfb6702433&verify=1750386916-FhBzHe8zJXNv2P0hcfdk454w2NuBfCKCAwxjz53FKQE%3d" width="400px" alt="">' +
'<h1 id="counter" style="font-family: Verdana, Geneva, Tahoma, sans-serif; color:red">ਮਾਈਕਲ ਐਂਟਨੀ ਤੈਨੂੰ ਮਾਰ ਦੇਵੇਗਾ।</h1>' +
'<p style="font-family: Verdana, Geneva, Tahoma, sans-serif; color:grey">ਮਾਈਕਲ ਐਂਟਨੀ ਤੁਹਾਨੂੰ ਮਾਰ ਦੇਵੇਗਾ ਅਤੇ ਤੁਸੀਂ ਬਹੁਤ ਡਰ ਜਾਓਗੇ ਕਿਉਂਕਿ ਤੁਸੀਂ<br> ਪਹਿਲਾਂ ਈਵੀ ਮਾਡਲ ਅਸਾਈਨਮੈਂਟ ਪੂਰਾ ਨਹੀਂ ਕੀਤਾ ਅਤੇ ਆਦਮੀ ਕੰਮ ਤੋਂ ਸੰਤੁਸ਼ਟ<br> ਨਹੀਂ ਹੈ, ਇਸ ਲਈ ਤੁਹਾਨੂੰ ਲਿਖਣਾ ਪਵੇਗਾ ਕਿ ਮੈਨੂੰ ਇੱਕੋ ਕਾਗਜ਼ ਤੇ ਲਗਾਤਾਰ 5 ਵਾਰ<br> ਆਦਮੀ ਲਈ ਕੰਮ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ ਜਿਵੇਂ ਮਲਟੀਪਲ ਰਿਵਰ ਆਫ਼ ਪੰਜਾਬੀ।</p> </div> </body> ';
setInterval(function(){document.getElementById("michael").style.display = "none"}, 10)
setInterval(function(){document.getElementById("michael").style.display = "block"}, 20)
setInterval(function(){document.body.style.backgroundColor = "black"}, 20)
setInterval(function(){document.body.style.backgroundColor = "darkred"}, 40)