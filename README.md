## 推箱子游戏
- 使用vue3+pinia实现推箱子游戏
- 使用vitest进行单元测试


## 功能列表
- [x] 玩家移动
- [x] 玩家碰墙
- [x] 玩家推动箱子
- [x] 移动到目标点上时图片切换
- [x] 胜利条件判断
- [ ] 地图编辑器
- [ ] 步骤回退
- [ ] 游戏重玩

## 问题

### 玩家在什么情况下不能动？
- 玩家前面是墙
- 玩家前面有多个箱子
- 玩家前面是箱子+墙

### 如何推动箱子？
判断玩家前面有没有箱子，如果有的话，再判断箱子是否可以推动，如果可以推动的话，就同时移动箱子和玩家


### 箱子在什么情况下不可以推动？
- 箱子前面是墙
- 箱子前面是箱子


### 游戏胜利条件是什么？
胜利条件是每个目标点上都有箱子

### 目标点上有箱子/玩家时怎么切换展示的图片？
通过`isTargetPos`，传入坐标，判断该坐标是否为目标点，如果是的话，就切换图片