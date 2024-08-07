PGDMP                         |            foreignLanguages    15.3    15.3 &    $           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            %           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            &           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            '           1262    24576    foreignLanguages    DATABASE     �   CREATE DATABASE "foreignLanguages" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Belarus.1251';
 "   DROP DATABASE "foreignLanguages";
                postgres    false            �            1259    24577    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    24594    dictionaries    TABLE       CREATE TABLE public.dictionaries (
    id integer NOT NULL,
    caption text,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone,
    "userId" integer
);
     DROP TABLE public.dictionaries;
       public         heap    postgres    false            �            1259    24593    dictionaries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.dictionaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.dictionaries_id_seq;
       public          postgres    false    218            (           0    0    dictionaries_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.dictionaries_id_seq OWNED BY public.dictionaries.id;
          public          postgres    false    217            �            1259    24622    media    TABLE     :  CREATE TABLE public.media (
    id integer NOT NULL,
    caption text,
    description text,
    name text,
    size double precision,
    mimetype text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone,
    md5 text
);
    DROP TABLE public.media;
       public         heap    postgres    false            �            1259    24621    media_id_seq    SEQUENCE     �   CREATE SEQUENCE public.media_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.media_id_seq;
       public          postgres    false    222            )           0    0    media_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.media_id_seq OWNED BY public.media.id;
          public          postgres    false    221            �            1259    24583    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    caption text,
    description text,
    login character varying(255),
    password character varying(255),
    "isAdmin" boolean DEFAULT false,
    "isSuperAdmin" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24582    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            *           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            �            1259    24608    words    TABLE       CREATE TABLE public.words (
    id integer NOT NULL,
    caption text,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone,
    "dictionaryId" integer
);
    DROP TABLE public.words;
       public         heap    postgres    false            �            1259    24607    words_id_seq    SEQUENCE     �   CREATE SEQUENCE public.words_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.words_id_seq;
       public          postgres    false    220            +           0    0    words_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.words_id_seq OWNED BY public.words.id;
          public          postgres    false    219            {           2604    24597    dictionaries id    DEFAULT     r   ALTER TABLE ONLY public.dictionaries ALTER COLUMN id SET DEFAULT nextval('public.dictionaries_id_seq'::regclass);
 >   ALTER TABLE public.dictionaries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            }           2604    24625    media id    DEFAULT     d   ALTER TABLE ONLY public.media ALTER COLUMN id SET DEFAULT nextval('public.media_id_seq'::regclass);
 7   ALTER TABLE public.media ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            x           2604    24586    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            |           2604    24611    words id    DEFAULT     d   ALTER TABLE ONLY public.words ALTER COLUMN id SET DEFAULT nextval('public.words_id_seq'::regclass);
 7   ALTER TABLE public.words ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220                      0    24577    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    214   �+                 0    24594    dictionaries 
   TABLE DATA           q   COPY public.dictionaries (id, caption, description, "createdAt", "updatedAt", "deletedAt", "userId") FROM stdin;
    public          postgres    false    218   I,       !          0    24622    media 
   TABLE DATA           {   COPY public.media (id, caption, description, name, size, mimetype, "createdAt", "updatedAt", "deletedAt", md5) FROM stdin;
    public          postgres    false    222   p-                 0    24583    users 
   TABLE DATA           �   COPY public.users (id, caption, description, login, password, "isAdmin", "isSuperAdmin", "createdAt", "updatedAt", "deletedAt") FROM stdin;
    public          postgres    false    216   �-                 0    24608    words 
   TABLE DATA           p   COPY public.words (id, caption, description, "createdAt", "updatedAt", "deletedAt", "dictionaryId") FROM stdin;
    public          postgres    false    220   $.       ,           0    0    dictionaries_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.dictionaries_id_seq', 11, true);
          public          postgres    false    217            -           0    0    media_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.media_id_seq', 1, false);
          public          postgres    false    221            .           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    215            /           0    0    words_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.words_id_seq', 1, false);
          public          postgres    false    219                       2606    24581     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    214            �           2606    24601    dictionaries dictionaries_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.dictionaries
    ADD CONSTRAINT dictionaries_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.dictionaries DROP CONSTRAINT dictionaries_pkey;
       public            postgres    false    218            �           2606    24629    media media_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.media
    ADD CONSTRAINT media_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.media DROP CONSTRAINT media_pkey;
       public            postgres    false    222            �           2606    24592    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    24615    words words_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.words
    ADD CONSTRAINT words_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.words DROP CONSTRAINT words_pkey;
       public            postgres    false    220            �           2606    24602 %   dictionaries dictionaries_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.dictionaries
    ADD CONSTRAINT "dictionaries_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);
 Q   ALTER TABLE ONLY public.dictionaries DROP CONSTRAINT "dictionaries_userId_fkey";
       public          postgres    false    218    216    3201            �           2606    24616    words words_dictionaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.words
    ADD CONSTRAINT "words_dictionaryId_fkey" FOREIGN KEY ("dictionaryId") REFERENCES public.dictionaries(id);
 I   ALTER TABLE ONLY public.words DROP CONSTRAINT "words_dictionaryId_fkey";
       public          postgres    false    3203    218    220            �           2606    24630    words words_dictionaryId_fkey1    FK CONSTRAINT     �   ALTER TABLE ONLY public.words
    ADD CONSTRAINT "words_dictionaryId_fkey1" FOREIGN KEY ("dictionaryId") REFERENCES public.dictionaries(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.words DROP CONSTRAINT "words_dictionaryId_fkey1";
       public          postgres    false    3203    220    218               t   x�u��
�0����}��z����M��C$�`��(�""���#���\s��`�L'7�E�v�zH��s�5}-�c���Ȣ�ӿw�c�]���QI���e�ot�1oY6           x�}�Ok� ��O�����'5�6vc[o�d�K&~��+�V)x���Ӹ`l�2���Қ1M�%QB�Q~+:� V�6$���P�"��}�l��9�E���Z2"%���(B�����]����VsJX#.�<�����a�D)VDR��������rXx#��������L���4��F5�msj�DI��h���#T��E���װ��W���M"�?.}��C���$R����	��׭��f10�ϫ��n�6��TU� �      !      x������ � �         �   x�3�tt�����HUJM��tL����HAN�$C���*�Ҍ��B�B�H�B33��J���s� �נ|�`�����`S_�@_�B��T�4�N##]s]C#C+SK+CK=s#Cmc|R1~\1z\\\ �<(*            x������ � �     