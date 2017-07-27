# 网络
## Mac 地址
ifconfig ： en0 中 ether 即为mac 地址
用“-”分隔的 6 个 十六进制数(每个数占 8 比特)00-00-5D-B8-39-B0 就是 MAC 地址。 其中 00-00-5D 代表制造商,B8-39-B0 代表产品的编号

## 子网掩码
子网掩码中,值为 1 的那些位对应着 IP 地址中的网络地址,后面 值为 0 的那些位则对应着主机地址。
路由器 也有 ip

## DHCP
DHCP 的全称是 Dynamic Host Configuration Protocol(动态主机设 置协议)。
DHCP 服务器上记录着可以被分配到 LAN 内计算机的 IP 地址范围 和子网掩码的值。

“默认网关”的配置项。通常会把路由器的 IP 地址设置在这里。也就是说路由器就是从 LAN 通往互联网世界的入口 (Gateway)。路由器的 IP 地址也可以从 DHCP 服务器获取。

路由器记录 路由表
route print

ip -> mac : arp 协议。 apr 缓存。 arp -a

硬件上发送数据的是网卡。 
