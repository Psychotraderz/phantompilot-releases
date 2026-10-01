@echo off
rem Phantom Pilot - release a new version to customers (v1.30). Run Build-App.bat first.
rem 1) the release check (keys, version, notes, installer, built-app self-test, tests)  2) sign + publish.
setlocal
title Release Phantom Pilot
cd /d "%~dp0"
set "PY=python"
if exist ".venv\Scripts\python.exe" set "PY=.venv\Scripts\python.exe"
%PY% tools\release\release.py check %* || goto :end
%PY% tools\release\release.py publish
:end
echo.
pause
