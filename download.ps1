$outDir = "e:\Projects\Employee-Management-System\src\components\stitch_screens"
New-Item -ItemType Directory -Force -Path "$outDir\LoginPage" > $null
New-Item -ItemType Directory -Force -Path "$outDir\OrganizationRegistration" > $null
New-Item -ItemType Directory -Force -Path "$outDir\AdminDashboard" > $null
New-Item -ItemType Directory -Force -Path "$outDir\EmployeeDashboard" > $null
New-Item -ItemType Directory -Force -Path "$outDir\TaskManagement" > $null
New-Item -ItemType Directory -Force -Path "$outDir\DesignSystem" > $null

Write-Host "Downloading Login Page..."
curl.exe -sSL "https://lh3.googleusercontent.com/aida/ADBb0uj1WXi9FoEfzT4IMAymzVDBuCRyiOF5dXc47lcZE3WscCRRVecoy1Siim7dpNwxUk4Uu-lmBKBYCsKHH5DMr_JPanRWCXr-HwOyrj13gKQ3HwHCFI-hG8KlTk5kUdHqRprDzko_d9nm63LYk-eJNprI3NJvYxouK-hmBFdbbRIXjn74QQXTgKfZYWdf6_YJYt3eQSBm_ZuTTkScg9eeLVIPyHKqH4YxNmNxdym1KKp9ElWs12wSHpNx0IfU" -o "$outDir\LoginPage\screenshot.png"
curl.exe -sSL "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NmZDE2NjhlOTJmMDQwMTdiZDk2MmIzNzE1ZGE3MjQ3EgsSBxDalviW1B8YAZIBJAoKcHJvamVjdF9pZBIWQhQxMTkwNzUwMzQzMDQ0MTM4MzkzMA&filename=&opi=89354086" -o "$outDir\LoginPage\index.html"

Write-Host "Downloading Organization Registration..."
curl.exe -sSL "https://lh3.googleusercontent.com/aida/ADBb0ujavvx-FMxRtgg_m5pm5IS4dK-BG4qMLlYDRL-Vj33ilXgozur8OXVJ8vlpMA-4PZ9K0z_1mbPv2-_cwWeikfPifHw43AmNR11bGQH-Hjgfd9oo6NCCuTeqRY1qK8pvM6Rxcp1Scs7YmAZGoTRgFYgWGRsUcvKAWpztxssZ03VAUdwMrUtknO6CAq_5UROiwRwpJva-TTRQxOTmhmup756MW6711rvFHDCpKo47d1ZLMhYRdKiBL0EBuPY" -o "$outDir\OrganizationRegistration\screenshot.png"
curl.exe -sSL "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2M2NDkyZDgxMTJmMjRiZTg5MTMzM2E4ODA0ZDE1MTI1EgsSBxDalviW1B8YAZIBJAoKcHJvamVjdF9pZBIWQhQxMTkwNzUwMzQzMDQ0MTM4MzkzMA&filename=&opi=89354086" -o "$outDir\OrganizationRegistration\index.html"

Write-Host "Downloading Admin Dashboard..."
curl.exe -sSL "https://lh3.googleusercontent.com/aida/ADBb0uidRN_lhw_7JmCD-UP0EhdOe_nTuX7ja3WNoRwgr5szj7cnQ9SnhbUld27WiKrXqfs1L_LqrtRoq3-C7qoCKc2rgA_QzWWfq2azErct7D9Jh6Exa8WyJCEN-L-3TjgP7gem5foyuONIiqDrgfoilncps9eTxACm_aGyzgeEZTeUoD5JSL0zg7-Pv1yh_qPp80h_DiLMjcWECU9M7QarITPfoSxRrj5tltxJoTcgxJp-UVwNud8JjSHkVRhE" -o "$outDir\AdminDashboard\screenshot.png"
curl.exe -sSL "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzc0MmEyNGI0ZDA4ZDQ2MDg5ZmIwMmZlMzY5ZDAzODdmEgsSBxDalviW1B8YAZIBJAoKcHJvamVjdF9pZBIWQhQxMTkwNzUwMzQzMDQ0MTM4MzkzMA&filename=&opi=89354086" -o "$outDir\AdminDashboard\index.html"

Write-Host "Downloading Employee Dashboard..."
curl.exe -sSL "https://lh3.googleusercontent.com/aida/ADBb0ui_xkd8HivrVuMY6tdlwHJsywz3snr61zZXpicPV1t_WoOnQdZ4TUVGNDXE_e6-Opvm0fwbLtzX2EligogTsF5AaBb_lSz1mLZ4svITchoMwAQomT0vKobDe3zpplXntOXzk-6yB7AEEta10Iin4N9gIN00wIiUuqB9tdKevnGU_kqp6GXMzvKZsjCx695j2eFV-1X8J6rxLeuda8KWgc4M9bSpnahYITtPBk6KvY1Cg7kOhn6E5w-nc7XR" -o "$outDir\EmployeeDashboard\screenshot.png"
curl.exe -sSL "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzA4MzM0MDE4OTcyNTRkZGFiMzcxZDg2ZDg4MDM5YmU4EgsSBxDalviW1B8YAZIBJAoKcHJvamVjdF9pZBIWQhQxMTkwNzUwMzQzMDQ0MTM4MzkzMA&filename=&opi=89354086" -o "$outDir\EmployeeDashboard\index.html"

Write-Host "Downloading Task Management..."
curl.exe -sSL "https://lh3.googleusercontent.com/aida/ADBb0uiJTT2nLpZI6MjLAYE5W2DzF0BvshdKHoTWMgFfvkYXBjcIwSZ_WId6lfdeiMZoPK-L9VXokJo1kaYi9pTkNDyaZB8wFjPg8Rt2IQeQ3A3SmgJDZkM8o8p8YEiVJv12tGHyuqpJ609LoH7O151H08R6_DjvyRz0jDt4VOR9Sb804XzucjN1DT-dCUGIEusfJtjleUf4NOZRQ5iQU8N8c72cdTVXbhl8fsKP1E6TMCjea6ayIjGrQpmJgTBM" -o "$outDir\TaskManagement\screenshot.png"
curl.exe -sSL "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzA0YTRhZTYzNzFhYjQ3NTc4NDc2M2Y1YTYxMTk5YjRhEgsSBxDalviW1B8YAZIBJAoKcHJvamVjdF9pZBIWQhQxMTkwNzUwMzQzMDQ0MTM4MzkzMA&filename=&opi=89354086" -o "$outDir\TaskManagement\index.html"

Write-Host "All downloads complete."
