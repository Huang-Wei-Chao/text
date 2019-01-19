$(document).ready(function () {
    $("#summernote").summernote({
        height: 400,
        focus: true,
        lang: "zh-CN",
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['fontSize', ['fontSize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['insert', ['picture']]
        ],
    })
});