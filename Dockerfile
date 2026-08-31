FROM python:3.11-slim

# スイス・エフェメリスのコンパイルに必要なLinuxパッケージをインストール
RUN apt-get update && apt-get install -y \
    build-essential \
    libswe-dev \
    swisseph \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# スイス・エフェメリスのデータパスを環境変数として定義
ENV EPHE_PATH=/usr/share/libswe/ephe

# ローカルでテストしやすいように、今回はポート「8000」で起動します
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
