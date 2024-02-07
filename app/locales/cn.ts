import { SubmitKey } from "../store/config";

const cn = {
  WIP: "已支持联网问答,GPT4功能...",
  Error: {
    Unauthorized:
      "尊敬的用户，新年快乐！\n\n我们将在春节期间暂时歇业。不过别担心，我们会在年后重新开放。祝您在新的一年里幸福快乐，财源广进！\n\n祝您度过一个愉快的春节，万事如意！\n\n> by.天工智能Ai多功能高级版：[立即访问](https://ai1.yjie.fun/)\n> 🍟高级版正常对外开放~",
  },
  Auth: {
    Title: "设备未授权",
    Tips: "使用前请先设备验证，请在下方填入授权码",
    Input: "在此处填写授权码",
    Confirm: "开始授权",
    Later: "退出授权",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 条对话`,
  },
  Chat: {
    SubTitle: (count: number) => `共 ${count} 条对话`,
    Actions: {
      ChatList: "查看消息列表",
      CompressedHistory: "查看压缩后的历史 Prompt",
      Export: "导出聊天记录",
      Copy: "复制",
      Stop: "停止",
      Retry: "重试",
      Pin: "固定",
      PinToastContent: "已将 1 条对话固定至预设提示词",
      PinToastAction: "查看",
      Delete: "删除",
      Edit: "编辑",
    },
    Commands: {
      new: "新建聊天",
      newm: "从应用新建聊天",
      next: "下一个聊天",
      prev: "上一个聊天",
      clear: "清除上下文",
      del: "删除聊天",
    },
    InputActions: {
      Stop: "停止响应",
      ToBottom: "滚到最新",
      Theme: {
        auto: "自动主题",
        light: "亮色模式",
        dark: "深色模式",
      },
      Prompt: "快捷指令",
      Masks: "所有应用",
      Clear: "清除聊天",
      Settings: "对话设置",
      OpenWebSearch: "开启联网",
      CloseWebSearch: "关闭联网",
    },
    Rename: "重命名聊天",
    Typing: "正在输入ing…",
    Input: (submitKey: string) => {
      var inputHints = ``;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter 换行";
      }
      return inputHints + "输入: 触发快捷指令";
    },
    Send: "发送",
    Config: {
      Reset: "清除记忆",
      SaveAs: "存为应用",
    },
    IsContext: "预设提示词",
  },
  Export: {
    Title: "分享聊天记录",
    Copy: "全部复制",
    Download: "下载文件",
    Share: "分享到 ShareGPT",
    MessageFromYou: "来自你的消息",
    MessageFromChatGPT: "来自 ChatGPT 的消息",
    Format: {
      Title: "导出格式",
      SubTitle: "可以导出 Markdown 文本或者 PNG 图片",
    },
    IncludeContext: {
      Title: "包含应用上下文",
      SubTitle: "是否在消息中展示应用上下文",
    },
    Steps: {
      Select: "选取",
      Preview: "预览",
    },
    Image: {
      Toast: "正在生成截图",
      Modal: "长按或右键保存图片",
    },
  },
  Select: {
    Search: "搜索消息",
    All: "选取全部",
    Latest: "最近几条",
    Clear: "清除选中",
  },
  Memory: {
    Title: "历史摘要",
    EmptyContent: "对话内容过短，无需总结",
    Send: "自动压缩聊天记录并作为上下文发送",
    Copy: "复制摘要",
    Reset: "[unused]",
    ResetConfirm: "确认清空历史摘要？",
  },
  Home: {
    NewChat: "New Chat",
    DeleteChat: "确认删除选中的对话？",
    DeleteToast: "已删除会话",
    Revert: "撤销",
  },
  Settings: {
    Title: "设置",
    SubTitle: "所有设置选项",

    Danger: {
      Reset: {
        Title: "重置所有设置",
        SubTitle: "重置所有设置项回默认值",
        Action: "立即重置",
        Confirm: "确认重置所有设置？",
      },
      Clear: {
        Title: "清除所有数据",
        SubTitle: "清除所有聊天、设置数据",
        Action: "立即清除",
        Confirm: "确认清除所有聊天、设置数据？",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "所有语言",
    },
    Avatar: "头像",
    FontSize: {
      Title: "字体大小",
      SubTitle: "聊天内容的字体大小",
    },
    InjectSystemPrompts: {
      Title: "注入系统级提示信息(非必选)",
      SubTitle: "强制给每次请求的消息列表开头添加一个模拟 ChatGPT 的系统提示",
    },
    InputTemplate: {
      Title: "用户输入预处理(非必填)",
      SubTitle: "用户最新的一条消息会填充到此模板",
    },

    Update: {
      Version: (x: string) => `授权码领取`,
      IsLatest: "无条件领取无限制免费额度",
      CheckUpdate: "立即领取",
      IsChecking: "加载中...",
      FoundUpdate: (x: string) => `无条件领取无限制免费额度`,
      GoToUpdate: "立即领取",
    },
    SendKey: "发送键",
    Theme: "主题",
    TightBorder: "无边框模式",
    SendPreviewBubble: {
      Title: "预览气泡",
      SubTitle: "在预览气泡中预览 Markdown 内容",
    },
    Mask: {
      Splash: {
        Title: "应用启动页",
        SubTitle: "新建聊天时，展示应用启动页",
      },
      Builtin: {
        Title: "隐藏内置应用",
        SubTitle: "在所有应用列表中隐藏内置应用",
      },
    },
    Prompt: {
      Disable: {
        Title: "禁用快捷指令",
        SubTitle: "在输入框开头输入 / 即可触发",
      },
      List: "自定义快捷指令列表",
      ListCount: (builtin: number, custom: number) =>
        `内置 ${builtin} 条，自定义 ${custom} 条`,
      Edit: "编辑",
      Modal: {
        Title: "快捷指令列表",
        Add: "新建",
        Search: "搜索快捷指令",
      },
      EditModal: {
        Title: "编辑快捷指令",
      },
    },
    HistoryCount: {
      Title: "附带历史消息数",
      SubTitle: "每次请求携带的历史消息数",
    },
    CompressThreshold: {
      Title: "历史消息长度压缩阈值",
      SubTitle: "当未压缩的历史消息超过该值时，将进行压缩",
    },
    Token: {
      Title: "您的Key🔑",
      SubTitle: "您的设备授权码",
      Placeholder: "例：sk-xxxx",
    },

    Usage: {
      Title: "项目版本",
      SubTitle(used: any, total: any) {
        return `1.0.1`;
      },
      IsChecking: "正在检查…",
      Check: "重新检查",
      NoAccess: "1.0.1",
    },
    AccessCode: {
      Title: "🔒授权码🔒",
      SubTitle: "您的设备授权码",
      Placeholder: "请输入获取的授权码",
    },
    Endpoint: {
      Title: "接口地址(非必填)",
      SubTitle: "https://",
    },
    CustomModel: {
      Title: "自定义模型(非必填)",
      SubTitle: "增加自定义模型选项，使用英文逗号隔开",
    },
    Model: "模型选择",
    Temperature: {
      Title: "随机性",
      SubTitle: "值越大，回复越随机",
    },
    TopP: {
      Title: "核采样",
      SubTitle: "与随机性类似，请不要和随机性一起更改",
    },
    MaxTokens: {
      Title: "单次对话字数限制",
      SubTitle: "单次对话最高字数/上限15000",
    },
    PresencePenalty: {
      Title: "话题新鲜度",
      SubTitle: "值越大,越有可能扩展到新话题,太高会导致乱码",
    },
    FrequencyPenalty: {
      Title: "频率惩罚度",
      SubTitle: "值越大,回复的重复字词越低",
    },
  },
  Store: {
    DefaultTopic: "New Chat",
    BotHello: "尊敬的用户，新年快乐！\n\n我们将在春节期间暂时歇业。不过别担心，我们会在年后重新开放。祝您在新的一年里幸福快乐，财源广进！\n\n祝您度过一个愉快的春节，万事如意！\n\n> by.天工智能Ai多功能高级版：[立即访问](https://ai1.yjie.fun/)\n> 🍟高级版正常对外开放~",
    Error: "出错了，稍后重试吧",
    Prompt: {
      History: (content: string) => "这是历史聊天总结作为前情提要：" + content,
      Topic:
        "使用四到五个字直接返回这句话的简要主题，不要解释、不要标点、不要语气词、不要多余文本，如果没有主题，请直接返回“闲聊”",
      Summarize:
        "简要总结一下对话内容，用作后续的上下文提示 prompt，控制在 200 字以内",
    },
  },
  Copy: {
    Success: "已写入剪切板",
    Failed: "复制失败，请赋予剪切板权限",
  },
  Context: {
    Toast: (x: any) => `包含 ${x} 条预设提示词`,
    Edit: "当前对话设置",
    Add: "新增预设对话",
    Clear: "对话记录已清除,将重新开始",
    Revert: "恢复对话",
  },
  Plugin: {
    Name: "Plugin",
  },
  Changelog: {
    Name: "最新公告",
  },
  PrivacyPage: {
    Name: "隐私",
    Confirm: "同意",
  },
  Mask: {
    Name: "APP Store",
    Page: {
      Title: "预设GPT应用",
      SubTitle: (count: number) => `${count} 个ChatGPT应用`,
      Search: "搜索GPT应用",
      Create: "新建",
    },
    Item: {
      Info: (count: number) => `包含 ${count} 条预设对话`,
      Chat: "对话",
      View: "查看",
      Edit: "编辑",
      Delete: "删除",
      DeleteConfirm: "确认删除？",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `编辑预设应用 ${readonly ? "（只读）" : ""}`,
      Download: "下载应用",
      Clone: "克隆应用",
    },
    Config: {
      Avatar: "应用头像",
      Name: "应用名称",
      Sync: {
        Title: "使用全局设置",
        SubTitle: "当前对话是否使用全局模型设置",
        Confirm: "当前对话的自定义设置将会被自动覆盖，确认启用全局设置？",
      },
      HideContext: {
        Title: "隐藏预设对话",
        SubTitle: "隐藏后预设对话不会出现在聊天界面",
      },
      Share: {
        Title: "分享此应用",
        SubTitle: "生成此应用的直达链接",
        Action: "复制链接",
      },
    },
  },
  NewChat: {
    Return: "返回",
    Skip: "直接开始",
    NotShow: "不再展示",
    ConfirmNoShow: "确认禁用？禁用后可以随时在设置中重新启用。",
    Title: "海量的ChatGPT应用",
    SubTitle: "或在几秒钟内创建属于自己的应用",
    More: "选择应用",
  },

  UI: {
    Confirm: "确认",
    Cancel: "取消",
    Close: "关闭",
    Create: "新建",
    Edit: "编辑",
  },
  Exporter: {
    Model: "模型",
    Messages: "消息",
    Topic: "主题",
    Time: "时间",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof cn;
export type PartialLocaleType = DeepPartial<typeof cn>;

export default cn;
