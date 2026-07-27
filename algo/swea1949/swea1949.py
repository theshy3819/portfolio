import sys
import os

# 현재 파이썬 파일(swea1949.py)이 있는 폴더의 절대 경로를 구합니다.
current_dir = os.path.dirname(os.path.abspath(__file__))

# 해당 폴더 안에 있는 swea1949.txt의 전체 경로를 만듭니다.
file_path = os.path.join(current_dir, "swea1949.txt")

# 생성된 경로로 파일을 불러옵니다.
sys.stdin = open(file_path, "r")

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y, length, able_k):
    global max_len
    max_len = max(max_len, length)

    visited[x][y] = 1

    for d in range(4):
        nx = x + dx[d]
        ny = y + dy[d]
        if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
            if arr[nx][ny] < arr[x][y]:
                dfs(nx, ny, length + 1, able_k)
            elif able_k:
                for k in range(1, K + 1):
                    if arr[nx][ny] - k < arr[x][y]:
                        before = arr[nx][ny]
                        arr[nx][ny] -= k
                        dfs(nx, ny, length + 1, False)
                        arr[nx][ny] = before
    visited[x][y] = 0

T = int(input())
for t_c in range(1, T + 1):
    N, K = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]

    max_height = max(max(row) for row in arr)
    start_li = []

    for i in range(N):
        for j in range(N):
            if arr[i][j] == max_height:
                start_x, start_y = i, j
                start_li.append((start_x, start_y))

    max_len = 0

    visited = [[0] * N for _ in range(N)]

    for x, y in start_li:
        dfs(x, y, 1, True)

    print(f'#{t_c} {max_len}')
    

