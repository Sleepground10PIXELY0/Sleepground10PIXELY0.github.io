// 미리 설정된 이름과 키 데이터
const namesData = {
    "names": [
        { "name": "RATH4R", "key": "rath4r-key" },
        { "name": "DUCKGAE", "key": "duckgae-key" },
        { "name": "Heptagram", "key": "heptagram-key" },
        { "name": "ehdgh141", "key": "ehdgh141-key" },
        { "name": "Sleepground", "key": "sleepground-key" },
        { "name": "SUHYEN", "key": "suhyen-key" }
    ]
};

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('getKeyButton').addEventListener('click', function() {
        const predefinedKey = getPredefinedKey(name); // 미리 설정된 키 가져오기

        if (predefinedKey) {
            redirectToMainPage(predefinedKey);
        } else {
            console.error(`"${name}"에 대한 미리 설정된 키를 찾을 수 없습니다.`);
        }
    });
});

function getPredefinedKey(name) {
    const foundName = namesData.names.find(item => item.name === name);
    return foundName ? foundName.key : null;
}

function redirectToMainPage(key) {
    window.location.href = `main.html?key=${key}`; // 메인 페이지로 키 전달
}
